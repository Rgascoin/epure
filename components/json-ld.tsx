import type { Graph } from "schema-dts";

/** Server-rendered JSON-LD, escaped against `</script>` injection. */
export function JsonLd({ data }: { data: Graph }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
