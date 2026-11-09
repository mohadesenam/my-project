'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
  FolderKanban, Wrench, Users, Star, Mail, LogOut, Plus, Edit, Trash2, X, Save,
} from 'lucide-react';

type TabKey = 'projects' | 'services' | 'team' | 'testimonials' | 'messages';

export default function AdminDashboard() {
  const [tab, setTab] = useState<TabKey>('projects');
  const [data, setData] = useState<Record<string, any[]>>({});
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<any>(null);
  const [creating, setCreating] = useState(false);
  const router = useRouter();

  const tabs: { key: TabKey; label: string; icon: any }[] = [
    { key: 'projects', label: 'Projects', icon: FolderKanban },
    { key: 'services', label: 'Services', icon: Wrench },
    { key: 'team', label: 'Team', icon: Users },
    { key: 'testimonials', label: 'Testimonials', icon: Star },
    { key: 'messages', label: 'Messages', icon: Mail },
  ];

  const fetchData = useCallback(async (key: TabKey) => {
    setLoading(true);
    const res = await fetch(`/api/admin/${key}`);
    const json = await res.json();
    setData((prev) => ({ ...prev, [key]: json.data || [] }));
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData(tab);
  }, [tab, fetchData]);

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    await fetch(`/api/admin/${tab}/${id}`, { method: 'DELETE' });
    fetchData(tab);
  };

  const handleSave = async (item: any) => {
    const id = item.id;
    const method = id ? 'PUT' : 'POST';
    const url = id ? `/api/admin/${tab}/${id}` : `/api/admin/${tab}`;
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    setEditing(null);
    setCreating(false);
    fetchData(tab);
  };

  const updateMessageStatus = async (id: number, status: string) => {
    await fetch(`/api/admin/messages/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    fetchData('messages');
  };

  return (
    <div className="min-h-screen bg-ghost">
      {/* Header */}
      <header className="bg-navy-deep text-white py-4 px-6 flex items-center justify-between sticky top-0 z-40">
        <h1 className="font-serif text-xl font-light">STRATECH Admin Dashboard</h1>
        <button onClick={logout} className="flex items-center gap-2 text-white/70 hover:text-white text-sm">
          <LogOut size={18} /> Logout
        </button>
      </header>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-6 p-6">
        {/* Sidebar */}
        <aside className="lg:w-56 flex-shrink-0">
          <nav className="flex lg:flex-col gap-2 overflow-x-auto">
            {tabs.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.key}
                  onClick={() => { setTab(t.key); setEditing(null); setCreating(false); }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-sans text-sm font-semibold whitespace-nowrap transition-colors ${
                    tab === t.key ? 'bg-accent text-white' : 'bg-white text-ink-muted hover:bg-accent/10'
                  }`}
                >
                  <Icon size={18} /> {t.label}
                  {t.key === 'messages' && data.messages?.some((m) => m.status === 'new') && (
                    <span className="ml-auto w-2 h-2 rounded-full bg-red-500" />
                  )}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl font-medium text-ink-dark capitalize">{tab}</h2>
            {tab !== 'messages' && (
              <button
                onClick={() => { setCreating(true); setEditing(null); }}
                className="btn-primary !py-2 !px-4 !text-xs"
              >
                <Plus size={16} /> Add New
              </button>
            )}
          </div>

          {(editing || creating) && (
            <EditForm
              entity={tab}
              item={editing}
              onSave={handleSave}
              onCancel={() => { setEditing(null); setCreating(false); }}
            />
          )}

          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="skeleton h-20 rounded-card" />
              ))}
            </div>
          ) : tab === 'messages' ? (
            <MessageList messages={data.messages || []} onUpdateStatus={updateMessageStatus} onDelete={handleDelete} />
          ) : (
            <EntityList items={data[tab] || []} onEdit={(item) => { setEditing(item); setCreating(false); }} onDelete={handleDelete} entity={tab} />
          )}
        </div>
      </div>
    </div>
  );
}

function EntityList({ items, onEdit, onDelete, entity }: { items: any[]; onEdit: (item: any) => void; onDelete: (id: number) => void; entity: string }) {
  const titleKey = entity === 'team' ? 'name' : 'title';
  const subtitleKey = entity === 'team' ? 'role' : entity === 'testimonials' ? 'company' : 'shortDescription' in (items[0] || {}) ? 'shortDescription' : 'description';

  if (items.length === 0) {
    return <p className="text-ink-muted text-center py-12">No items found. Click &ldquo;Add New&rdquo; to create one.</p>;
  }

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded-card shadow-card p-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            {item.coverImage || item.image || item.photo || item.avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.coverImage || item.image || item.photo || item.avatar} alt="" className="w-14 h-14 rounded-lg object-cover flex-shrink-0" />
            ) : (
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <FolderKanban size={20} className="text-accent" />
              </div>
            )}
            <div className="min-w-0">
              <h3 className="font-sans font-bold text-ink-dark text-sm truncate">{item[titleKey]}</h3>
              <p className="text-ink-muted text-xs truncate">{item[subtitleKey] || ''}</p>
            </div>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <button onClick={() => onEdit(item)} className="w-9 h-9 rounded-lg bg-accent/10 hover:bg-accent/20 flex items-center justify-center" aria-label="Edit">
              <Edit size={16} className="text-accent" />
            </button>
            <button onClick={() => onDelete(item.id)} className="w-9 h-9 rounded-lg bg-red-50 hover:bg-red-100 flex items-center justify-center" aria-label="Delete">
              <Trash2 size={16} className="text-red-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function MessageList({ messages, onUpdateStatus, onDelete }: { messages: any[]; onUpdateStatus: (id: number, status: string) => void; onDelete: (id: number) => void }) {
  if (messages.length === 0) {
    return <p className="text-ink-muted text-center py-12">No messages yet.</p>;
  }

  return (
    <div className="space-y-3">
      {messages.map((msg) => (
        <div key={msg.id} className="bg-white rounded-card shadow-card p-5">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="font-sans font-bold text-ink-dark text-sm">{msg.name}</h3>
              <p className="text-ink-muted text-xs">{msg.email} {msg.phone && `• ${msg.phone}`}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                msg.status === 'new' ? 'bg-blue-100 text-blue-700' :
                msg.status === 'read' ? 'bg-yellow-100 text-yellow-700' :
                'bg-green-100 text-green-700'
              }`}>
                {msg.status}
              </span>
              <button onClick={() => onDelete(msg.id)} className="w-8 h-8 rounded-lg bg-red-50 hover:bg-red-100 flex items-center justify-center" aria-label="Delete">
                <Trash2 size={14} className="text-red-500" />
              </button>
            </div>
          </div>
          {msg.serviceType && <p className="text-accent text-xs font-semibold mb-2">Service: {msg.serviceType}</p>}
          <p className="text-ink-muted text-sm leading-relaxed">{msg.message}</p>
          <div className="flex gap-2 mt-3">
            {msg.status === 'new' && (
              <button onClick={() => onUpdateStatus(msg.id, 'read')} className="px-3 py-1 rounded-lg bg-yellow-50 text-yellow-700 text-xs font-semibold hover:bg-yellow-100">Mark as Read</button>
            )}
            <button onClick={() => onUpdateStatus(msg.id, 'replied')} className="px-3 py-1 rounded-lg bg-green-50 text-green-700 text-xs font-semibold hover:bg-green-100">Mark as Replied</button>
          </div>
        </div>
      ))}
    </div>
  );
}

const fieldConfigs: Record<string, { key: string; label: string; type: string; required?: boolean }[]> = {
  projects: [
    { key: 'title', label: 'Title', type: 'text', required: true },
    { key: 'slug', label: 'Slug', type: 'text', required: true },
    { key: 'category', label: 'Category', type: 'select', required: true },
    { key: 'description', label: 'Description', type: 'textarea', required: true },
    { key: 'location', label: 'Location', type: 'text', required: true },
    { key: 'year', label: 'Year', type: 'text', required: true },
    { key: 'client', label: 'Client', type: 'text', required: true },
    { key: 'area', label: 'Area', type: 'text', required: true },
    { key: 'coverImage', label: 'Cover Image URL', type: 'text', required: true },
    { key: 'gallery', label: 'Gallery (JSON array of URLs)', type: 'textarea' },
    { key: 'featured', label: 'Featured', type: 'checkbox' },
  ],
  services: [
    { key: 'title', label: 'Title', type: 'text', required: true },
    { key: 'slug', label: 'Slug', type: 'text', required: true },
    { key: 'shortDescription', label: 'Short Description', type: 'text', required: true },
    { key: 'fullDescription', label: 'Full Description', type: 'textarea', required: true },
    { key: 'icon', label: 'Icon (lucide name)', type: 'text', required: true },
    { key: 'image', label: 'Image URL', type: 'text', required: true },
  ],
  team: [
    { key: 'name', label: 'Name', type: 'text', required: true },
    { key: 'role', label: 'Role', type: 'text', required: true },
    { key: 'bio', label: 'Bio', type: 'textarea', required: true },
    { key: 'photo', label: 'Photo URL', type: 'text', required: true },
    { key: 'linkedin', label: 'LinkedIn URL', type: 'text' },
    { key: 'order', label: 'Display Order', type: 'number' },
  ],
  testimonials: [
    { key: 'name', label: 'Name', type: 'text', required: true },
    { key: 'company', label: 'Company', type: 'text', required: true },
    { key: 'text', label: 'Testimonial', type: 'textarea', required: true },
    { key: 'rating', label: 'Rating (1-5)', type: 'number', required: true },
    { key: 'avatar', label: 'Avatar URL', type: 'text', required: true },
  ],
};

function EditForm({ entity, item, onSave, onCancel }: { entity: string; item: any; onSave: (item: any) => void; onCancel: () => void }) {
  const [form, setForm] = useState<any>(item || {});
  const fields = fieldConfigs[entity] || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...form };
    if (entity === 'projects' && typeof payload.gallery === 'string') {
      try { payload.gallery = payload.gallery; } catch {}
    }
    if (entity === 'projects' && payload.featured === undefined) payload.featured = false;
    if (entity === 'team' && payload.order === undefined) payload.order = 0;
    if (entity === 'testimonials' && payload.rating === undefined) payload.rating = 5;
    onSave(payload);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-card shadow-card p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-sans font-bold text-ink-dark">{item ? 'Edit' : 'Add New'} {entity.slice(0, -1)}</h3>
        <button type="button" onClick={onCancel} className="text-ink-muted hover:text-ink-dark">
          <X size={20} />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map((field) => (
          <div key={field.key} className={field.type === 'textarea' ? 'sm:col-span-2' : ''}>
            <label className="block text-ink-dark text-sm font-semibold mb-1.5">{field.label}</label>
            {field.type === 'text' && (
              <input
                type="text"
                value={form[field.key] || ''}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-ink-dark text-sm focus:outline-none focus:border-accent"
                required={field.required}
              />
            )}
            {field.type === 'number' && (
              <input
                type="number"
                value={form[field.key] || ''}
                onChange={(e) => setForm({ ...form, [field.key]: parseInt(e.target.value) })}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-ink-dark text-sm focus:outline-none focus:border-accent"
                required={field.required}
              />
            )}
            {field.type === 'textarea' && (
              <textarea
                value={form[field.key] || ''}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-ink-dark text-sm focus:outline-none focus:border-accent resize-none"
                required={field.required}
              />
            )}
            {field.type === 'select' && (
              <select
                value={form[field.key] || ''}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-ink-dark text-sm focus:outline-none focus:border-accent"
                required={field.required}
              >
                <option value="">Select...</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Commercial">Commercial</option>
                <option value="Urban">Urban</option>
                <option value="Residential">Residential</option>
              </select>
            )}
            {field.type === 'checkbox' && (
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form[field.key] || false}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.checked })}
                  className="w-5 h-5 rounded accent-accent"
                />
                <span className="text-ink-muted text-sm">Yes</span>
              </label>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-3 mt-5">
        <button type="submit" className="btn-primary !py-2 !px-4 !text-xs">
          <Save size={16} /> Save
        </button>
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded-lg border border-gray-200 text-ink-muted text-xs font-semibold hover:bg-gray-50">
          Cancel
        </button>
      </div>
    </form>
  );
}
