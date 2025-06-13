// Manufacturer Assessment Company Overview form section
export const ManufacturerAssessmentSection = {
    create() {
        return `
            <fieldset data-section-id="manufacturer-assessment">
                <legend>Manufacturer Assessment - Company Overview</legend>
                
                <div class="form-group">
                    <label>Number of Employees</label>
                    <table class="manufacturer-employees-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>OKC</th>
                                <th>Broken Arrow</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Total</strong></td>
                                <td><input type="number" name="employees-total-okc" min="0"></td>
                                <td><input type="number" name="employees-total-ba" min="0"></td>
                            </tr>
                            <tr>
                                <td><strong>Design & Engineering</strong></td>
                                <td><input type="number" name="employees-design-okc" min="0"></td>
                                <td><input type="number" name="employees-design-ba" min="0"></td>
                            </tr>
                            <tr>
                                <td><strong>Production</strong></td>
                                <td><input type="number" name="employees-production-okc" min="0"></td>
                                <td><input type="number" name="employees-production-ba" min="0"></td>
                            </tr>
                            <tr>
                                <td><strong>Quality Control</strong></td>
                                <td><input type="number" name="employees-qc-okc" min="0"></td>
                                <td><input type="number" name="employees-qc-ba" min="0"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="form-section-two-column">
                    <div class="form-group">
                        <label for="quality-personnel">Quality Personnel:</label>
                        <textarea id="quality-personnel" name="quality-personnel" rows="3" placeholder="Enter quality personnel information"></textarea>
                    </div>

                    <div class="form-group">
                        <label for="org-chart-attached">Org Chart Attached:</label>
                        <div>
                            <input type="radio" id="org-chart-yes" name="org-chart-attached" value="yes">
                            <label for="org-chart-yes">Yes</label>
                            <input type="radio" id="org-chart-no" name="org-chart-attached" value="no">
                            <label for="org-chart-no">No</label>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="quality-mgmt-rep">Quality Management Representative:</label>
                        <input type="text" id="quality-mgmt-rep" name="quality-mgmt-rep" placeholder="Enter name">
                    </div>

                    <div class="form-group">
                        <label for="quality-mgmt-job-title">Job Title:</label>
                        <input type="text" id="quality-mgmt-job-title" name="quality-mgmt-job-title" placeholder="Enter job title">
                    </div>

                    <div class="form-group">
                        <label for="quality-mgmt-reports-to">Reports To:</label>
                        <input type="text" id="quality-mgmt-reports-to" name="quality-mgmt-reports-to" placeholder="Enter supervisor name and title">
                    </div>
                </div>

                <div class="form-group">
                    <label>Registration</label>
                    <table class="registration-table">
                        <tbody>
                            <tr>
                                <td><strong>ISO</strong></td>
                                <td><input type="text" name="registration-iso" placeholder="Enter ISO certification details"></td>
                            </tr>
                            <tr>
                                <td><strong>API</strong></td>
                                <td><input type="text" name="registration-api" placeholder="Enter API certification details"></td>
                            </tr>
                            <tr>
                                <td><strong>CRNs</strong></td>
                                <td><input type="text" name="registration-crns" placeholder="Enter CRN details"></td>
                            </tr>
                            <tr>
                                <td><strong>PED</strong></td>
                                <td><input type="text" name="registration-ped" placeholder="Enter PED certification details"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="form-group">
                    <label for="qms-standard">If not ISO, what standard(s) is the QMS designed to?</label>
                    <textarea id="qms-standard" name="qms-standard" rows="3" placeholder="Describe the QMS standards used"></textarea>
                </div>

                <div class="form-group">
                    <label for="assessment-comments">Comments:</label>
                    <textarea id="assessment-comments" name="assessment-comments" rows="8" placeholder="Enter assessment comments and observations"></textarea>
                </div>

                <div class="form-group">
                    <h4>Company Overview</h4>
                </div>

                <div class="form-group">
                    <label for="sales-distribution-org">Does the manufacturer have in place a sales, distribution and/or technical support organization to adequately serve the relevant market?</label>
                    <div>
                        <input type="radio" id="sales-org-yes" name="sales-distribution-org" value="yes">
                        <label for="sales-org-yes">Yes</label>
                        <input type="radio" id="sales-org-no" name="sales-distribution-org" value="no">
                        <label for="sales-org-no">No</label>
                    </div>
                </div>

                <div class="form-group">
                    <label for="sales-org-description">If yes, briefly describe the organization and describe how finished goods are supplied to the market.</label>
                    <textarea id="sales-org-description" name="sales-org-description" rows="8" placeholder="Describe the sales, distribution and technical support organization"></textarea>
                </div>

                <div class="form-group">
                    <label for="technical-support-description">For products that require technical support, briefly describe the technical sales and/or engineering organization. Provide a contact name & number within that organization.</label>
                    <textarea id="technical-support-description" name="technical-support-description" rows="8" placeholder="Describe technical support organization and provide contact information"></textarea>
                </div>

                <div class="form-group">
                    <label for="product-catalogues">Provide current copies of product catalogues and literature (electronic preferred).</label>
                    <textarea id="product-catalogues" name="product-catalogues" rows="4" placeholder="List or describe product catalogues and literature provided"></textarea>
                </div>

                <div class="form-group">
                    <label for="manufacturing-steps">Provide a description of all critical manufacturing steps in production of manufacturer's product, including and identifying steps outsourced to others.</label>
                    <textarea id="manufacturing-steps" name="manufacturing-steps" rows="8" placeholder="Describe critical manufacturing steps and identify any outsourced processes"></textarea>
                </div>

                <div class="form-group">
                    <label for="financial-statements">If available, provide most recent audited financial statements for operations directly related to manufacturing.</label>
                    <textarea id="financial-statements" name="financial-statements" rows="6" placeholder="Describe financial statements provided or note if not available"></textarea>
                </div>
            </fieldset>
        `;
    }
};

