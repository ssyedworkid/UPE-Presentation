import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/reveal.css";
import "./App.css";

import TitleSlide from "./slides/TitleSlide";
import DualPersonSlide from "./slides/DualPersonSlide";
import AgendaSlide from "./slides/AgendaSlide";
import ProgressivePieSlide from "./slides/ProgressivePieSlide";
import PieChartSlide from "./slides/PieChartSlide";
import TransitionSlide from "./slides/TransitionSlide";
import TimelineSlide from "./slides/TimelineSlide";
import TwoCardSlide from "./slides/TwoCardSlide";
import BulletSlide from "./slides/BulletSlide";
import AdvocateSlide from "./slides/AdvocateSlide";
import IcebergSlide from "./slides/IcebergSlide";
import PyramidSlide from "./slides/PyramidSlide";
import SpecDrivenSlide from "./slides/SpecDrivenSlide";
import CardGridSlide from "./slides/CardGridSlide";
import PipelineSlide from "./slides/PipelineSlide";
import ClaudeAssistantSlide from "./slides/ClaudeAssistantSlide";
import LadderSlide from "./slides/LadderSlide";
import ThankYouSlide from "./slides/ThankYouSlide";

import {
  meta,
  suhaan,
  siddh,
  pieCharts,
  timeline,
  claudeSkills,
  pipeline,
  pyramid,
  ladder,
  closingQuestions,
} from "./data/slideData";

export default function App() {
  const deckRef = useRef(null);
  const revealRef = useRef(null);

  useEffect(() => {
    if (revealRef.current) return;
    const deck = new Reveal(deckRef.current, {
      hash: true,
      transition: "fade",
      transitionSpeed: "default",
      controls: true,
      controlsLayout: "bottom-right",
      progress: true,
      center: true,
      width: 1920,
      height: 1080,
      margin: 0,
      minScale: 0.2,
      maxScale: 2.0,
    });
    deck.initialize().then(() => {
      revealRef.current = deck;
      window.Reveal = deck;
    });
  }, []);

  return (
    <div className="reveal" ref={deckRef}>
      <div className="slides">
        {/* 1 - Title */}
        <TitleSlide
          title={meta.title}
          subtitle={`${meta.presenters} | ${meta.club}`}
        />

        {/* 2 - Suhaan & Siddh combined */}
        <DualPersonSlide left={suhaan} right={siddh} />

        {/* 3 - Agenda */}
        <AgendaSlide />

        {/* 4 - Progressive Pie Charts (all 3 on one slide, sequential reveal) */}
        <ProgressivePieSlide
          charts={[
            pieCharts.howWeStarted,
            pieCharts.shouldHaveDone,
            pieCharts.decentEngineer,
          ]}
        />

        {/* 5 - Transition: decent -> good */}
        <TransitionSlide
          headline="So how do we go from decent → good?"
          items={[
            { faIcon: "search", text: "Find Work" },
            { faIcon: "document", text: "Document & Own It" },
            { faIcon: "advocate", text: "Advocate" },
          ]}
        />

        {/* 6 - Timeline (sequential bar chart reveal) */}
        <TimelineSlide data={timeline} />

        {/* 7 - Document & Own It (sequential card reveal) */}
        <TwoCardSlide />

        {/* 8 - Advocate */}
        <AdvocateSlide />

        {/* 9 - Transition: Where does AI fit? */}
        <TransitionSlide
          headline="Where does AI fit into our daily lives?"
          subtitle="You've learned to find work, document it, and advocate. Now let's multiply all of it."
          accentPhrase="multiply all of it"
        />

        {/* 10 - Transition: Excellent Engineer */}
        <TransitionSlide
          headline="Good engineers solve problems. Great engineers multiply their output."
          subtitle="This is where Claude, Copilot, and AI tools come in."
          accentPhrase="multiply their output"
        />

        {/* 10 - Iceberg */}
        <IcebergSlide />

        {/* 11 - Pyramid */}
        <PyramidSlide levels={pyramid} />

        {/* 12 - Spec-Driven Development (NEW) */}
        <SpecDrivenSlide />

        {/* 13 - Claude Skills & MCP (with /jira video demo) */}
        <CardGridSlide skills={claudeSkills} />

        {/* 14 - Pipeline */}
        <PipelineSlide steps={pipeline} />

        {/* 15 - Code is 5% */}
        <PieChartSlide chart={pieCharts.codeOnly5} />

        {/* 16 - Claude as Assistant */}
        <ClaudeAssistantSlide />

        {/* 17 - Leverage Ladder */}
        <LadderSlide steps={ladder} />

        {/* 18 - Closing */}
        <BulletSlide
          headline="Everything I told you? It's what interviews are really asking."
          bullets={closingQuestions}
          numbered
          finalLine="AI tools don't replace ownership. They amplify it. That's what gets you hired — and promoted."
        />

        {/* 19 - Thank You */}
        <ThankYouSlide />
      </div>
    </div>
  );
}
