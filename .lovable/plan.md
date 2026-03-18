

## Plan: Add New Publications and Deduplicate

### Analysis of Existing vs New

After cross-referencing, these are the **truly new entries** to add (not already present):

1. **Impact of emergency intubation on central venous oxygen saturation in critically ill patients** — Critical Care, 2009 (71 citas) — Artículo
2. **Torsades de Pointes por intoxicación de anestésicos locales** — Anestesia en México, 2025 — Artículo
3. **Importancia del adiestramiento en el manejo de la vía aérea comprometida en la angina de Ludwig** — Anestesia en México, 2025 — Artículo
4. **Eficacia de quetiapina en pacientes con COVID-19 y psicosis activa en terapia intensiva** — Medicina Crítica, 2021 — Artículo
5. **Recombinant Activated Factor VII: A Successful Treatment for Acute Uncontrolled Severe Bleeding** — CHEST (Abstract/Congreso)
6. **Long-term efficacy of sitaxsentan in patients with severe pulmonary arterial hypertension: a six-year follow-up** — Chest, 2009 — Abstract
7. **Myasthenia gravis: a clinical challenge in postoperative management** — WCICC Vancouver, 2025 — Poster/Congreso
8. **Candida infection associated with epiglottitis** — WCICC Vancouver, 2025 — Poster/Congreso
9. **Ludwig's angina and the importance of advanced airway approach** — WCICC Vancouver, 2025 — Poster/Congreso
10. **Patients on dapagliflozin with pneumonia do not progress to sepsis compared to metformin** — WCICC Vancouver, 2025 — Poster/Congreso

### Updates to Existing Entries

- Update the "Impacto de la sedación..." entry (2008) — it's actually the same as #3 from the new list but with wrong source. The Critical Care 2009 article is a separate, higher-impact publication. Both will be kept.
- Update "Efecto de la septostomía auricular" source from "Research Gate Magazine" to **"European Respiratory Journal"** (2011, 190 citas) — this is the verified high-impact version.
- Update "Terapia anticoagulante oral en jóvenes..." source from "American Thorax Journal" to **"ATS International Conference"** (2010).
- The existing "Dapaglifozina mejora..." (2023) is different from the 2025 WCICC poster — keep both.

### Statistics Update

Update the stats cards:
- Publicaciones Científicas: **40+** → **50+**
- Add a new stat: **332+** Citas Verificables (or update existing)

### Categories

Add "Poster/Congreso" as a new category color variant for the WCICC entries.

### Implementation

Single file edit: `src/components/Publicaciones.tsx`
- Add ~10 new entries to the `publicaciones` array
- Correct source/year on 2 existing entries
- Update statistics numbers
- Add "Poster/Congreso" category styling

