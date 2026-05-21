import React, { useMemo } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";
import { climateZones } from "../climateMapData";

function ClimateMap({ copy, data, language }) {
  const zoneMatch = (zone) => data.houseModels.filter((model) => model.tags.includes(zone.tagLabel[language]));
  const modelList = (zone) => zoneMatch(zone).map((model) => model.name).slice(0, 3);

  const legendItems = useMemo(
    () => climateZones.map((zone) => ({
      id: zone.id,
      label: zone.label[language],
      color: zone.color
    })),
    [language]
  );

  return (
    <section className="mt-8 rounded bg-white p-5 shadow-line">
      <div className="flex flex-wrap items-center gap-3">
        <MapPin className="text-moss" />
        <h3 className="font-display text-2xl font-semibold">{copy.analysis.climateMap}</h3>
      </div>
      <div className="mt-5 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="overflow-hidden rounded-3xl border border-canopy/10 shadow-sm">
          <MapContainer
            center={[18, 0]}
            zoom={2.2}
            minZoom={2}
            maxZoom={6}
            scrollWheelZoom={true}
            zoomControl={false}
            className="h-[420px] w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {climateZones.map((zone) => (
              <CircleMarker
                key={zone.id}
                center={zone.coords}
                radius={14}
                pathOptions={{ color: zone.color, fillColor: zone.color, fillOpacity: 0.75, weight: 2 }}
              >
                <Tooltip direction="top" offset={[0, -16]} opacity={1} sticky>
                  {zone.label[language]}
                </Tooltip>
                <Popup>
                  <div className="space-y-3 text-sm text-basalt">
                    <p className="font-semibold text-canopy">{zone.label[language]}</p>
                    <p className="text-canopy/70">{zone.summary[language]}</p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="rounded-3xl bg-chalk/60 p-3">
                        <p className="text-xs uppercase tracking-[0.18em] text-canopy/70">{language === "fr" ? "Humidité" : "Humidity"}</p>
                        <p className="mt-2 font-semibold">{zone.humidity}</p>
                      </div>
                      <div className="rounded-3xl bg-chalk/60 p-3">
                        <p className="text-xs uppercase tracking-[0.18em] text-canopy/70">{language === "fr" ? "Température" : "Temperature"}</p>
                        <p className="mt-2 font-semibold">{zone.temperature}</p>
                      </div>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-canopy/70">{language === "fr" ? "Matériaux" : "Materials"}</p>
                        <ul className="mt-2 space-y-1 text-sm text-canopy/85">
                          {zone.materials[language].map((material) => (
                            <li key={material}>• {material}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-canopy/70">{language === "fr" ? "Méthodes" : "Methods"}</p>
                        <ul className="mt-2 space-y-1 text-sm text-canopy/85">
                          {zone.methods[language].map((method) => (
                            <li key={method}>• {method}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="rounded-3xl bg-chalk/60 p-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-canopy/70">{language === "fr" ? "Modèles compatibles" : "Compatible models"}</p>
                      <p className="mt-2 text-sm text-canopy/85">{modelList(zone).join(" • ") || (language === "fr" ? "Aucun modèle direct" : "No direct models")}</p>
                    </div>
                    <div className="rounded-3xl bg-chalk/60 p-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-canopy/70">{language === "fr" ? "Score de résilience" : "Resilience score"}</p>
                      <p className="mt-2 font-semibold">{zone.resilience}</p>
                    </div>
                  </div>
                </Popup>
              </CircleMarker>
            ))}
            <ZoomControl position="bottomright" />
          </MapContainer>
        </div>

        <div className="space-y-4 rounded-3xl border border-canopy/10 bg-chalk/5 p-5 shadow-sm">
          <div className="rounded-3xl bg-white/90 p-4 shadow-panel">
            <p className="text-xs uppercase tracking-[0.18em] text-moss">{language === "fr" ? "Légende" : "Legend"}</p>
            <div className="mt-4 space-y-3">
              {legendItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <span className="h-4 w-4 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-basalt">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-white/90 p-4 shadow-panel">
            <p className="text-xs uppercase tracking-[0.18em] text-moss">{language === "fr" ? "Carte mondiale" : "Global map"}</p>
            <p className="mt-3 text-sm leading-6 text-canopy/75">
              {language === "fr"
                ? "Une carte interactive pour explorer les climats, les matériaux et les recommandations architecturales."
                : "An interactive map to explore climates, materials and architectural recommendations."}
            </p>
          </div>
          <div className="rounded-3xl bg-white/90 p-4 shadow-panel">
            <p className="text-xs uppercase tracking-[0.18em] text-moss">{language === "fr" ? "Astuce" : "Tip"}</p>
            <p className="mt-3 text-sm leading-6 text-canopy/75">
              {language === "fr"
                ? "Zoomez et déplacez la carte pour voir chaque zone climatique."
                : "Zoom and drag the map to explore each climate zone."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClimateMap;
