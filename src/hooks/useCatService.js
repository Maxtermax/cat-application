import { useObserver } from "hermes-io";
import { CatServiceContext } from "@/contexts/CatServiceContext";
import { CatServiceObserver } from "@/observers/CatServiceObserver";

const BASE_URL = "https://cataas.com/cat";

export const useCatService = () => {
  const handleServiceNotification = async (_, resolver) => {
    const response = await fetch(BASE_URL);
    const blob = await response.blob();
    let src = URL.createObjectURL(blob)
    resolver(src);
  };

  useObserver({
    contexts: [CatServiceContext],
    observer: CatServiceObserver,
    listener: handleServiceNotification,
  });
};
