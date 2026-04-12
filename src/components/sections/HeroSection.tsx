import Link from "next/link";

import { ArrowRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import { CONSTANTS } from "@/constants/constants";
import GitHubIcon from "../shared/icons/GitHubIcon";
import { getGitHubRepoStars } from "@/services/server";

const starFormatter = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1,
});

export default async function HeroSection() {
  const githubStars = await getGitHubRepoStars();
  const formattedStars =
    githubStars !== null ? starFormatter.format(githubStars) : null;

  return (
    <section className="relative border-b border-dashed border-sky-950">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="custom-container relative border-x border-dashed border-sky-950 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto relative z-10">
          <Badge
            variant="outline"
            className="relative animate-fade-in px-3 py-1 text-sm backdrop-blur-sm border-primary/20"
          >
            <span className="mr-1 text-primary">★</span>
            <span>Open Source</span>
            <BorderBeam
              size={30}
              duration={10}
              delay={2}
              colorFrom="#3b82f6"
              colorTo="#0ea5e9"
              className="pointer-events-none"
            />
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            The Auth Platform <br className="hidden md:block" />
            <span className="bg-linear-to-r from-blue-400 to-sky-600 bg-clip-text text-transparent">
              Native to Go. Built for Any Stack.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            An open-source authentication solution that scales with you. Embed
            it as a <strong>library</strong> in your Go app, or run it as a{" "}
            <strong>standalone auth server</strong> with any tech stack.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <Button
              asChild
              size="lg"
              className="h-12 px-8 text-base bg-linear-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 border-0 text-white"
            >
              <Link href="/docs">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base"
            >
              <Link
                href={CONSTANTS.githubRepoUrl}
                target="_blank"
                className="flex items-center gap-2"
                aria-label={
                  formattedStars
                    ? `View on GitHub. ${formattedStars} stars.`
                    : "View on GitHub"
                }
              >
                <GitHubIcon className="mr-2 h-4 w-4" />
                View on GitHub
                {formattedStars ? (
                  <span className="inline-flex items-center gap-1 rounded-full border border-sky-950/30 bg-sky-950/20 px-2 py-0.5 text-xs font-semibold tabular-nums text-foreground/80">
                    <Star className="h-3 w-3 text-yellow-500" />
                    {formattedStars}
                  </span>
                ) : null}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
