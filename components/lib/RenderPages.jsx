import React from "react";
import { Route, Routes } from "react-router-dom";
import Lobby from "../../../src/pages";
import Page404 from "../../../src/pages/404";
// attack docs
import AttackDocs from "../../pages/attackDocs";
import CreateAttackDocs from "../../pages/attackDocs/CreateAttackDocs";
import AnalysisAttackDocs from "../../pages/attackDocs/AnalysisAttackDocs";
import AttackDocsTemplates from "../../pages/attackDocs/AttackDocsTemplates";
// defense docs
import DefenseDocs from "../../pages/defenseDocs";
import CreateDefenseDocs from "../../pages/defenseDocs/CreateDefenseDocs";
import AnalysisDefenseDocs from "../../pages/defenseDocs/AnalysisDefenseDocs";
import DefenseDocsTemplates from "../../pages/defenseDocs/DefenseDocsTemplates";



const RenderPages = () => {
  return (
    <Routes>
      {/* homepage - Lobby */}
      <Route path="/" element={<Lobby />} />

      {/* attack docs */}
      <Route path="/attackDocs" element={<AttackDocs />} />
      <Route path="/attackDocs/generate-attack-doc" element={<CreateAttackDocs />} />
      <Route path="/attackDocs/analysis-attack-doc" element={<AnalysisAttackDocs />} />
      <Route path="/attackDocs/attack-docs-templates" element={<AttackDocsTemplates />} />

      {/* defense docs */}
      <Route path="/defenseDocs" element={<DefenseDocs />} />
      <Route path="/defenseDocs/generate-defense-doc" element={<CreateDefenseDocs />} />
      <Route path="/defenseDocs/analysis-defense-doc" element={<AnalysisDefenseDocs />} />
      <Route path="/defenseDocs/defense-docs-templates" element={<DefenseDocsTemplates />} />

      {/* 404 */}
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
};

export default RenderPages;
