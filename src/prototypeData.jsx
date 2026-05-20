import {
  Building2,
  Droplets,
  Home,
  Layers3,
  PanelTop,
  Recycle,
  ShieldCheck,
  Sun,
  ThermometerSun,
  TreePine,
  Wind
} from "lucide-react";

const methodIcons = {
  passiveCooling: ThermometerSun,
  naturalVentilation: Wind,
  rainwater: Droplets,
  solar: Sun,
  inertia: ShieldCheck,
  greenRoofs: TreePine,
  modular: Building2,
  lowCarbon: Recycle
};

const recommendationIcons = [Home, Layers3, PanelTop, Wind, ThermometerSun, Droplets];

export function createPrototypeData(copy) {
  // Text lives in the language files; this helper only reconnects translated data to icon components.
  const recommendations = Object.fromEntries(
    Object.entries(copy.data.recommendations).map(([key, recommendation]) => [
      key,
      {
        ...recommendation,
        blocks: recommendation.blocks.map((block, index) => ({
          ...block,
          icon: recommendationIcons[index]
        }))
      }
    ])
  );

  const methods = copy.data.constructionMethods.map((method) => ({
    ...method,
    icon: methodIcons[method.icon]
  }));

  return {
    ...copy.data,
    recommendations,
    constructionMethods: methods
  };
}
