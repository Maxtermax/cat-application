import { useState } from "react";
import { CatServiceContext } from "@/contexts/CatServiceContext";
import { CatServiceObserver } from "@/observers/CatServiceObserver";
import { useCatService } from '@/hooks/useCatService';
import "./App.css";

function App() {
  useCatService();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleShowCat = async () => {
    setLoading(true);
    const src = await CatServiceObserver.notify({
      context: CatServiceContext,
      value: {
        type: "SHOW_CAT",
      },
    });
    setData({ src });
    setLoading(false);
  };

  return (
    <div>
      <div>
        {isLoading ? <span>loading...</span> : null}
        {error ? <span>error</span> : null}
        {!isLoading && !error && data ? <img height={500} width={500} src={data.src} /> : null}
      </div>
      {!isLoading ? <button onClick={handleShowCat}>Show me a cat</button> : null}
    </div>
  );
}

export default App;
