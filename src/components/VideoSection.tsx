import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="videos" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">Video Tutorials</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4">
            Video tutorials coming soon. Check back for step-by-step guides on using iRM.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Play className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
