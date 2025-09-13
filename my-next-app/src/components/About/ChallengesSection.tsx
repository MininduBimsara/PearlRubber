import React from "react";

export default function RubberChallenges() {
  const challenges = [
    {
      title: "Legacy Rubber Tracking",
      description:
        "Outdated manual systems make it difficult to trace rubber origins and maintain accurate plantation records.",
      icon: "📋",
      color: "red",
    },
    {
      title: "Limited EUDR Awareness",
      description:
        "Many farmers lack knowledge about new European regulations and compliance requirements.",
      icon: "❓",
      color: "orange",
    },
    {
      title: "Complex Supply Chains",
      description:
        "Multiple intermediaries between farmers and tire manufacturers create tracking complications.",
      icon: "🔗",
      color: "yellow",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "red":
        return {
          bg: "bg-gradient-to-br from-red-100/40 to-red-200/20",
          border: "border-red-200/50",
          accent: "bg-red-500",
        };
      case "orange":
        return {
          bg: "bg-gradient-to-br from-orange-100/40 to-orange-200/20",
          border: "border-orange-200/50",
          accent: "bg-orange-500",
        };
      case "yellow":
        return {
          bg: "bg-gradient-to-br from-amber-100/40 to-amber-200/20",
          border: "border-amber-200/50",
          accent: "bg-amber-500",
        };
      default:
        return {
          bg: "bg-gradient-to-br from-slate-100/40 to-slate-200/20",
          border: "border-slate-200/50",
          accent: "bg-slate-500",
        };
    }
  };

  return (
    <section className="py-20 px-5 bg-white/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Industry Challenges
          </h2>
          <p className="text-lg text-slate-700/80 max-w-3xl mx-auto leading-relaxed">
            Understanding the obstacles facing Sri Lanka's rubber industry helps
            us build better solutions
          </p>
        </div>

        {/* Challenge Cards - Staggered Layout */}
        <div className="space-y-8">
          {challenges.map((challenge, index) => {
            const colors = getColorClasses(challenge.color);
            const isEven = index % 2 === 0;

            return (
              <div
                key={challenge.title}
                className={`flex ${isEven ? "justify-start" : "justify-end"}`}
              >
                <div className={`max-w-2xl ${isEven ? "mr-8" : "ml-8"}`}>
                  <div
                    className={`glass-panel ${colors.bg} ${colors.border} border p-8 relative hover:transform hover:scale-105 transition-all duration-500`}
                  >
                    {/* Challenge Icon */}
                    <div
                      className={`absolute ${
                        isEven ? "-left-6" : "-right-6"
                      } top-6`}
                    >
                      <div
                        className={`w-12 h-12 ${colors.accent} rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <span className="text-white text-xl">
                          {challenge.icon}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={isEven ? "pl-8" : "pr-8"}>
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">
                        {challenge.title}
                      </h3>
                      <p className="text-slate-700/80 leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>

                    {/* Decorative Element */}
                    <div
                      className={`absolute ${
                        isEven ? "top-4 right-4" : "top-4 left-4"
                      } w-3 h-3 ${colors.accent} rounded-full opacity-60`}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Solution Preview */}
        <div className="mt-20">
          <div className="glass-panel bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-lg border border-green-200/30 p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                Our Solution Approach
              </h3>
              <p className="text-lg text-slate-700/80 leading-relaxed mb-8">
                We address these challenges through innovative technology,
                comprehensive training programs, and seamless integration with
                existing farming practices.
              </p>

              {/* Solution Highlights */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="glass-panel bg-white/50 border border-white/30 p-6">
                  <div className="text-2xl mb-3">🚀</div>
                  <h4 className="font-bold text-slate-800 mb-2">Modern Tech</h4>
                  <p className="text-sm text-slate-700/80">
                    Digital tracking systems
                  </p>
                </div>
                <div className="glass-panel bg-white/50 border border-white/30 p-6">
                  <div className="text-2xl mb-3">📚</div>
                  <h4 className="font-bold text-slate-800 mb-2">Education</h4>
                  <p className="text-sm text-slate-700/80">
                    EUDR compliance training
                  </p>
                </div>
                <div className="glass-panel bg-white/50 border border-white/30 p-6">
                  <div className="text-2xl mb-3">🤝</div>
                  <h4 className="font-bold text-slate-800 mb-2">Partnership</h4>
                  <p className="text-sm text-slate-700/80">
                    Connecting all stakeholders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
