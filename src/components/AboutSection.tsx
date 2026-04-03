import { ExternalLink } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">The iRM Odoo Module</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            iRM (Inventory Risk Mitigation) is a powerful Odoo module designed to help businesses reduce inventory risk and improve cashflow. By providing advanced inventory analytics, forecasting tools, and automated risk assessments, iRM empowers your organization to make data-driven decisions and optimize stock levels across your supply chain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">About IOM Business</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              IOM Business is the organization behind iRM, dedicated to delivering innovative solutions that help businesses optimize their operations and achieve sustainable growth. With a focus on inventory management and risk mitigation, IOM Business partners with companies to implement intelligent systems that reduce waste, improve efficiency, and boost profitability.
            </p>
            <a
              href="https://iombusiness.com.au/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              Visit IOM Business <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">About the Founder</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              iRM was created by Jude Matchado, an experienced business technology innovator with a passion for solving complex inventory challenges. With deep expertise in Odoo development and supply chain management, Jude has dedicated his career to building solutions that empower businesses to operate more efficiently and sustainably.
            </p>
            <a
              href="https://www.linkedin.com/in/jude-matchado-605017208/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              LinkedIn Profile <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
