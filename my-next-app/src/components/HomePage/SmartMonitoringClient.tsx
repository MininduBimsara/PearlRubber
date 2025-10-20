"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface SmartMonitoringData {
  badge: { text: string; bgColor: string; textColor: string; dotColor: string };
  title: string;
  subtitle: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
    image: string;
    metrics: string[];
  }>;
}

interface SmartMonitoringProps {
  data: SmartMonitoringData;
}

// ✅ Prevent execution during SSR
if (typeof window !== "undefined") {
  // Fix default marker icons
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });
}

export default function SmartMonitoringClient({
  data: _data,
}: SmartMonitoringProps) {
  if (typeof window === "undefined") return null; // ✅ guard for SSR

  const districts = [
    {
      name: "Kegalle",
      lat: 7.25,
      lng: 80.35,
      details:
        "High-quality rubber cultivation and research facilities in Sabaragamuwa.",
      image:
        "/download.jpeg",
    },
    {
      name: "Ratnapura",
      lat: 6.68,
      lng: 80.4,
      details: "Gem city and a major rubber production area.",
      image:
        "/rath apura.jpg",
    },
    {
      name: "Kalutara",
      lat: 6.58,
      lng: 79.96,
      details: "Coastal hub for rubber and coconut mixed plantations.",
      image:
        "Kalutara.jpg",
    },
    {
      name: "Matara",
      lat: 5.95,
      lng: 80.55,
      details: "Southern estates known for sustainable replanting programs.",
      image:
        "Matara.webp",
    },
    {
      name: "Kandy",
      lat: 7.29,
      lng: 80.63,
      details: "Hill country combining tea and rubber cultivation.",
      image:
        "Kandy.jpg",
    },
  ];

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `.leaflet-container { background: #101010; }`;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="py-24 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 text-black shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              GIS Overview of Sri Lankan Rubber Plantations
            </h3>
            <p className="text-gray-700 text-lg">
              Interactive map showing 5 major plantation districts.
            </p>
          </div>

          <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
            <MapContainer
              center={[7.0, 80.5]}
              zoom={8}
              scrollWheelZoom
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://carto.com/">CARTO</a>'
              />

              {districts.map((d, i) => (
                <Marker key={i} position={[d.lat, d.lng]} title={d.name}>
                  <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                    <span className="font-semibold">{d.name}</span>
                  </Tooltip>
                  <Popup>
                    <div className="text-center">
                      <img
                        src={d.image}
                        alt={d.name}
                        className="w-full h-32 object-cover rounded-md mb-2"
                      />
                      <strong>{d.name}</strong>
                      <p className="text-sm mt-1 text-gray-700">{d.details}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
