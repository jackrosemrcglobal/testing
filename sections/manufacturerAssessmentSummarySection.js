// Manufacturer Assessment Summary form section
export const ManufacturerAssessmentSummarySection = {
    create() {
        return `
            <fieldset data-section-id="manufacturer-assessment-summary">
                <legend>Manufacturer Assessment Summary</legend>
                
                <div class="form-group">
                    <h4>AUDIT SUMMARY</h4>
                </div>

                <div class="form-group">
                    <label for="audit-positives">Positives:</label>
                    <textarea id="audit-positives" name="audit-positives" rows="6" placeholder="Enter positive findings and observations from the audit"></textarea>
                </div>

                <div class="form-group">
                    <label for="audit-opportunities">Opportunities:</label>
                    <textarea id="audit-opportunities" name="audit-opportunities" rows="8" placeholder="Enter opportunities for improvement identified during the audit"></textarea>
                </div>

                <div class="form-group">
                    <label for="audit-nonconformances">Nonconformances:</label>
                    <textarea id="audit-nonconformances" name="audit-nonconformances" rows="10" placeholder="Enter any nonconformances identified during the audit"></textarea>
                </div>

                <div class="form-group">
                    <label for="audit-conclusion">Conclusion:</label>
                    <textarea id="audit-conclusion" name="audit-conclusion" rows="6" placeholder="Enter overall audit conclusion and recommendations"></textarea>
                </div>
            </fieldset>
        `;
    }
};

