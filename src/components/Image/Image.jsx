import { useCatService } from "@/hooks/useCatService";

export function Image() {
  const { data, loading, error } = useCatService();
  return (
    <div>
      {loading ? <span>loading...</span> : null}
      {error ? <span>error</span> : null}
      {!loading && !error && data ? <img src={data.src} /> : null}
    </div>
  );
}
