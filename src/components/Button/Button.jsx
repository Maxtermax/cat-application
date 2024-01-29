import { useState } from 'react';
import { CatServiceContext } from "@/contexts/CatServiceContext";
import { CatServiceObserver } from "@/observers/CatServiceObserver";

export default function Button() {
  const [isLoading, setLoading] = useState(false);

  const handleShowCat = async () => {
    setLoading(true);
    const result = await CatServiceObserver.notify({
      context: CatServiceContext,
      value: {
        type: "SHOW_CAT",
      },
    });
    console.log({ result });
    setLoading(false);
  };

  if (isLoading) {
    return <span>loading...</span>;
  }
  return <button onClick={handleShowCat}>Show me a cat</button>;
}
