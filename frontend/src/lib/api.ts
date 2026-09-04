const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

export function getToken() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("admin_token");
  }
  return null;
}

export function setToken(token: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem("admin_token", token);
  }
}

export function removeToken() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("admin_token");
  }
}

export async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const headers: HeadersInit = { "Content-Type": "application/json" };
  
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { ...headers, ...options.headers },
  });
  
  const json = await res.json();
  if (!json.success) throw new Error(json.message || "API error");
  return json.data as T;
}

export async function login(username: string, password: string): Promise<string> {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.message || "Login failed");
  setToken(json.token);
  return json.token;
}

// Events
export const createEvent = (data: any) => apiFetch<any>('/events', { method: 'POST', body: JSON.stringify(data) });
export const updateEvent = (id: string, data: any) => apiFetch<any>(/events/, { method: 'PUT', body: JSON.stringify(data) });
export const deleteEvent = (id: string) => apiFetch<any>(/events/, { method: 'DELETE' });
export const getEvents   = () => apiFetch<any[]>("/events");
export const getEvent    = (slug: string) => apiFetch<any>(`/events/${slug}`);

// Members
export const createMember = (data: any) => apiFetch<any>('/members', { method: 'POST', body: JSON.stringify(data) });
export const updateMember = (id: string, data: any) => apiFetch<any>(/members/, { method: 'PUT', body: JSON.stringify(data) });
export const deleteMember = (id: string) => apiFetch<any>(/members/, { method: 'DELETE' });
export const getMembers  = () => apiFetch<any[]>("/members");
export const getAlumni   = () => apiFetch<any[]>("/members/alumni");

// Projects
export const createProject = (data: any) => apiFetch<any>('/projects', { method: 'POST', body: JSON.stringify(data) });
export const updateProject = (id: string, data: any) => apiFetch<any>(/projects/, { method: 'PUT', body: JSON.stringify(data) });
export const deleteProject = (id: string) => apiFetch<any>(/projects/, { method: 'DELETE' });
export const getProjects = () => apiFetch<any[]>("/projects");
export const getProject  = (id: string) => apiFetch<any>(`/projects/${id}`);

// Articles
export const createArticle = (data: any) => apiFetch<any>('/articles', { method: 'POST', body: JSON.stringify(data) });
export const deleteArticle = (slug: string) => apiFetch<any>(/articles/, { method: 'DELETE' });
export const getArticles = () => apiFetch<any[]>("/articles");
export const getArticle  = (slug: string) => apiFetch<any>(`/articles/${slug}`);

// Join
export const submitJoin  = (data: { name: string; email: string; year: string; interest: string; skills?: string }) =>
  fetch(`${API_URL}/join`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then(r => r.json());

export const getJoinRequests = () => apiFetch<any[]>("/join");
export const deleteJoinRequest = (id: string) => apiFetch<any>(`/join/${id}`, { method: "DELETE" });

// Alumni (dedicated table)
export const getAllAlumni    = () => apiFetch<any[]>("/alumni");
export const createAlumnus  = (data: any) => apiFetch<any>('/alumni', { method: 'POST', body: JSON.stringify(data) });
export const updateAlumnus  = (id: string, data: any) => apiFetch<any>(`/alumni/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const deleteAlumnus  = (id: string) => apiFetch<any>(`/alumni/${id}`, { method: 'DELETE' });

