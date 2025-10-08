"use client";
import React, { useEffect, useRef } from "react";

// Import CSS only (safe on client)
import "leaflet/dist/leaflet.css";
import "leaflet-timedimension/dist/leaflet.timedimension.control.css";

// Type declarations (optional)
declare const L: any;

interface TeamData {
  badge: {
    text: string;
    bgColor: string;
    textColor: string;
    dotColor: string;
  };
  title: string;
  subtitle: string;
  teamStats: Array<{
    category: string;
    count: string;
    description: string;
  }>;
  leadership: {
    title: string;
    description: string;
    principles: Array<{
      title: string;
      description: string;
    }>;
  };
  careers: {
    title: string;
    description: string;
    benefits: Array<{
      title: string;
      description: string;
    }>;
    cta: string;
  };
}

interface TeamProps {
  data: TeamData;
}

export default function TeamSection({ data }: TeamProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null); // Ref to store map instance
  const initializedRef = useRef(false); // Ref to track initialization

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!mapRef.current) return;
    if (initializedRef.current) return; // Prevent re-initialization

    (async () => {
      // ✅ dynamically import leaflet and its plugins only on client
      const L = (await import("leaflet")).default;
      await import("leaflet-timedimension");

      // Check if map container still exists and isn't already initialized
      if (!mapRef.current || mapRef.current._leaflet_id) {
        return;
      }

      // Mark as initialized
      initializedRef.current = true;

      // Initialize map
      const map = L.map(mapRef.current, {
        center: [6.9271, 79.8612],
        zoom: 7,
        timeDimension: true,
        timeDimensionControl: true,
        timeDimensionOptions: {
          timeInterval: "1980/2025",
          period: "P5Y",
        },
      });

      // Store map instance
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      // Example data
      const rubberExpansionData = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: { time: "1980-01-01" },
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [80.2, 6.5],
                  [80.4, 6.5],
                  [80.4, 6.7],
                  [80.2, 6.7],
                  [80.2, 6.5],
                ],
              ],
            },
          },
          {
            type: "Feature",
            properties: { time: "1995-01-01" },
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [80.1, 6.4],
                  [80.5, 6.4],
                  [80.5, 6.8],
                  [80.1, 6.8],
                  [80.1, 6.4],
                ],
              ],
            },
          },
          {
            type: "Feature",
            properties: { time: "2010-01-01" },
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [80.0, 6.3],
                  [80.6, 6.3],
                  [80.6, 6.9],
                  [80.0, 6.9],
                  [80.0, 6.3],
                ],
              ],
            },
          },
          {
            type: "Feature",
            properties: { time: "2025-01-01" },
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [79.9, 6.2],
                  [80.7, 6.2],
                  [80.7, 7.0],
                  [79.9, 7.0],
                  [79.9, 6.2],
                ],
              ],
            },
          },
        ],
      };

      const geoJsonLayer = L.geoJSON(rubberExpansionData, {
        style: {
          color: "#228B22",
          weight: 2,
          fillOpacity: 0.5,
        },
      });

      const timedGeoJsonLayer = L.timeDimension.layer.geoJson(geoJsonLayer, {
        updateTimeDimension: true,
        addlastPoint: false,
        duration: "P1Y",
      });

      timedGeoJsonLayer.addTo(map);

      return () => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
          initializedRef.current = false;
        }
      };
    })();
  }, []);

  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center px-4 py-2 ${data.badge.bgColor} rounded-full mb-6`}
          >
            <div
              className={`w-2 h-2 ${data.badge.dotColor} rounded-full mr-2`}
            ></div>
            <span className={`text-sm font-medium ${data.badge.textColor}`}>
              {data.badge.text}
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Team Statistics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {data.teamStats.map((stat) => (
            <div
              key={stat.category}
              className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.count}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {stat.category}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* 🗺️ Time Slider Map Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Expansion of Rubber Plantations Over Time
          </h3>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Explore how rubber plantation areas have expanded across Sri Lanka
            from 1980 to 2025.
          </p>
          <div
            ref={mapRef}
            className="w-full h-[500px] rounded-3xl shadow-2xl border border-green-100 overflow-hidden"
          ></div>
        </div>

        {/* Leadership & Careers sections remain the same... */}
      </div>
    </section>
  );
}
