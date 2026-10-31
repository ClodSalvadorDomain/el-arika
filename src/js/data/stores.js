/**
 * Store network (demo data — addresses and phone numbers are placeholders).
 * lat/lng are city-level coordinates used for the map and "nearest store" sort.
 */
const H = { week: '09:30 – 20:30', fri: '14:00 – 20:30' }
const services = {
  full: ['Click & collect', 'Kitchen design studio', 'Delivery & assembly'],
  std: ['Click & collect', 'Delivery & assembly'],
}

export const STORES = [
  { id: 'alger-bab-ezzouar', city: 'Alger', name: 'EL Arika Bab Ezzouar', address: 'Zone commerciale Est, Bab Ezzouar, 16024 Alger', phone: '+213 21 00 00 01', lat: 36.7213, lng: 3.1836, hours: H, services: services.full, flagship: true },
  { id: 'alger-cheraga', city: 'Alger', name: 'EL Arika Chéraga', address: 'Route de Dély Ibrahim, Chéraga, 16002 Alger', phone: '+213 21 00 00 02', lat: 36.7667, lng: 2.95, hours: H, services: services.full },
  { id: 'oran', city: 'Oran', name: 'EL Arika Oran Es-Sénia', address: 'Pôle commercial Es-Sénia, 31000 Oran', phone: '+213 41 00 00 03', lat: 35.6971, lng: -0.6308, hours: H, services: services.full, flagship: true },
  { id: 'constantine', city: 'Constantine', name: 'EL Arika Constantine', address: 'Nouvelle ville Ali Mendjeli, 25000 Constantine', phone: '+213 31 00 00 04', lat: 36.365, lng: 6.6147, hours: H, services: services.full },
  { id: 'annaba', city: 'Annaba', name: 'EL Arika Annaba', address: 'Zone d’activités El Bouni, 23000 Annaba', phone: '+213 38 00 00 05', lat: 36.9, lng: 7.7667, hours: H, services: services.std },
  { id: 'setif', city: 'Sétif', name: 'EL Arika Sétif', address: 'Cité El Hidhab, 19000 Sétif', phone: '+213 36 00 00 06', lat: 36.1911, lng: 5.4137, hours: H, services: services.std },
  { id: 'blida', city: 'Blida', name: 'EL Arika Blida', address: 'Route nationale 1, Ouled Yaïch, 09000 Blida', phone: '+213 25 00 00 07', lat: 36.47, lng: 2.8277, hours: H, services: services.std },
  { id: 'tlemcen', city: 'Tlemcen', name: 'EL Arika Tlemcen', address: 'Boulevard de l’ALN, 13000 Tlemcen', phone: '+213 43 00 00 08', lat: 34.8783, lng: -1.315, hours: H, services: services.std },
  { id: 'bejaia', city: 'Béjaïa', name: 'EL Arika Béjaïa', address: 'Zone d’activités Ihaddaden, 06000 Béjaïa', phone: '+213 34 00 00 09', lat: 36.7509, lng: 5.0567, hours: H, services: services.std },
  { id: 'batna', city: 'Batna', name: 'EL Arika Batna', address: 'Route de Biskra, 05000 Batna', phone: '+213 33 00 00 10', lat: 35.555, lng: 6.1741, hours: H, services: services.std },
  { id: 'tizi-ouzou', city: 'Tizi Ouzou', name: 'EL Arika Tizi Ouzou', address: 'Nouvelle ville, 15000 Tizi Ouzou', phone: '+213 26 00 00 11', lat: 36.7118, lng: 4.0459, hours: H, services: services.std },
  { id: 'mostaganem', city: 'Mostaganem', name: 'EL Arika Mostaganem', address: 'Route d’Oran, 27000 Mostaganem', phone: '+213 45 00 00 12', lat: 35.931, lng: 0.0892, hours: H, services: services.std },
  { id: 'ouargla', city: 'Ouargla', name: 'EL Arika Ouargla', address: 'Boulevard du 1er Novembre, 30000 Ouargla', phone: '+213 29 00 00 13', lat: 31.9493, lng: 5.325, hours: H, services: services.std },
  { id: 'ghardaia', city: 'Ghardaïa', name: 'EL Arika Ghardaïa', address: 'Route de Bounoura, 47000 Ghardaïa', phone: '+213 29 00 00 14', lat: 32.49, lng: 3.673, hours: H, services: services.std },
]

export const directionsUrl = (s) => `https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lng}`
export const mapEmbedUrl = (s, d = 0.06) =>
  `https://www.openstreetmap.org/export/embed.html?bbox=${s.lng - d},${s.lat - d / 1.6},${s.lng + d},${s.lat + d / 1.6}&layer=mapnik&marker=${s.lat},${s.lng}`

export function distanceKm(a, b) {
  const R = 6371, rad = Math.PI / 180
  const dLat = (b.lat - a.lat) * rad, dLng = (b.lng - a.lng) * rad
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(x))
}
