import { useState } from "react";
import { FileText, Search, X, ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";

// In a real setup, these would be fetched from the GitHub repo's guides folder.
// For now, this is a placeholder structure. Add PDF files to a /guides folder in GitHub
// and update this list, or implement dynamic fetching.
const sampleGuides: { title: string; filename: string }[] = [];

const GuidesSection = () => {
  const [search, setSearch] = useState("");
  const [activeGuide, setActiveGuide] = useState<string | null>(null);

  const filtered = sampleGuides.filter((g) =>
    g.title.toLowerCase().includes(search.toLowerCase())
  );

  if (activeGuide) {
    const guide = sampleGuides.find((g) => g.filename === activeGuide);
    return (
      <section id="guides" className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto space-y-6">
          <button
            onClick={() => setActiveGuide(null)}
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            <ChevronLeft className="h-4 w-4" /> Back to Guides
          </button>
          <h3 className="text-xl font-semibold text-foreground">{guide?.title}</h3>
          <div className="w-full bg-muted rounded-lg overflow-hidden" style={{ height: "80vh" }}>
            <iframe
              src={`/guides/${activeGuide}`}
              className="w-full h-full"
              title={guide?.title}
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="guides" className="py-20 px-6" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">How to Guides</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4">
            Browse our PDF tutorials to get the most out of iRM.
          </p>
        </div>

        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search guides..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-10"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-muted-foreground/40 mx-auto mb-3" />
            <p className="text-muted-foreground text-sm">
              {sampleGuides.length === 0
                ? "PDF guides will appear here once added to the repository."
                : "No guides match your search."}
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {filtered.map((guide) => (
              <button
                key={guide.filename}
                onClick={() => setActiveGuide(guide.filename)}
                className="flex items-center gap-3 p-4 rounded-lg border bg-background hover:border-primary/50 transition-colors text-left"
              >
                <FileText className="h-8 w-8 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{guide.title}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GuidesSection;
