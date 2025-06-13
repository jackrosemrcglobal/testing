// Manufacturer Assessment ISO4 form section
export const ManufacturerAssessmentISO4Section = {
    create() {
        return `
            <fieldset data-section-id="manufacturer-assessment-iso4">
                <legend>Manufacturer Assessment ISO4</legend>
                
                <div class="form-group">
                    <h4>4.0 Context of the Organization</h4>
                </div>

                <!-- Section 4.1 -->
                <div class="form-group">
                    <h5>4.1 Understanding the Organization & It's Context</h5>
                    <table class="iso4-assessment-table">
                        <thead>
                            <tr>
                                <th>Criteria</th>
                                <th>Yes</th>
                                <th>No</th>
                                <th>Sec. Score</th>
                                <th>Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Has the organization determined internal and external issues that are relevant to its purpose and its strategic direction, and that effect its ability to achieve the intended result of the QMS?</td>
                                <td><input type="radio" name="iso4-1-1-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-1-1-yesno" value="no"></td>
                                <td><input type="number" name="iso4-1-1-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-1-1-comments" placeholder="Internal/external issues in QMS SWOT. Information could be clearer and easy to define"></td>
                            </tr>
                            <tr>
                                <td>Does the organization monitor and review information about internal and external issues?</td>
                                <td><input type="radio" name="iso4-1-2-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-1-2-yesno" value="no"></td>
                                <td><input type="number" name="iso4-1-2-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-1-2-comments"></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><strong>Section Score:</strong></td>
                                <td colspan="2"><span id="iso4-1-total-score">6</span></td>
                                <td><strong>Sec.Avg:</strong> <span id="iso4-1-avg-score">3</span></td>
                                <td><strong>Sec.Max:</strong> 10</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <!-- Section 4.2 -->
                <div class="form-group">
                    <h5>4.2 Understanding the Needs & Expectations of Interested Parties</h5>
                    <table class="iso4-assessment-table">
                        <thead>
                            <tr>
                                <th>Criteria</th>
                                <th>Yes</th>
                                <th>No</th>
                                <th>Sec. Score</th>
                                <th>Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Has the organization determined the interested parties that are relevant to the QMS?</td>
                                <td><input type="radio" name="iso4-2-1-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-2-1-yesno" value="no"></td>
                                <td><input type="number" name="iso4-2-1-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-2-1-comments" placeholder="Interested Parties needs to be more specific"></td>
                            </tr>
                            <tr>
                                <td>Determined the requirements of interested parties that are relevant to the QMS as referenced in Section B of Context of the Organization;</td>
                                <td><input type="radio" name="iso4-2-2-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-2-2-yesno" value="no"></td>
                                <td><input type="number" name="iso4-2-2-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-2-2-comments"></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><strong>Section Score:</strong></td>
                                <td colspan="2"><span id="iso4-2-total-score">6</span></td>
                                <td><strong>Sec.Avg:</strong> <span id="iso4-2-avg-score">3</span></td>
                                <td><strong>Sec.Max:</strong> 10</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <!-- Section 4.3 -->
                <div class="form-group">
                    <h5>4.3 Determining the Scope of the QMS</h5>
                    <table class="iso4-assessment-table">
                        <thead>
                            <tr>
                                <th>Criteria</th>
                                <th>Yes</th>
                                <th>No</th>
                                <th>Sec. Score</th>
                                <th>Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Has the external provider determined the boundaries and applicability of the QMS to establish its scope?</td>
                                <td><input type="radio" name="iso4-3-1-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-3-1-yesno" value="no"></td>
                                <td><input type="number" name="iso4-3-1-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-3-1-comments"></td>
                            </tr>
                            <tr>
                                <td colspan="5"><strong>Within the scope, is it evident that the external provider has considered the following?</strong></td>
                            </tr>
                            <tr>
                                <td>The external and internal issues referenced in Section A of Context of the Organization;</td>
                                <td><input type="radio" name="iso4-3-2-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-3-2-yesno" value="no"></td>
                                <td><input type="number" name="iso4-3-2-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-3-2-comments"></td>
                            </tr>
                            <tr>
                                <td>The requirements of interested parties that are relevant to the QMS as referenced in Section B of Context of the Organization;</td>
                                <td><input type="radio" name="iso4-3-3-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-3-3-yesno" value="no"></td>
                                <td><input type="number" name="iso4-3-3-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-3-3-comments"></td>
                            </tr>
                            <tr>
                                <td>The products and services of the organization.</td>
                                <td><input type="radio" name="iso4-3-4-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-3-4-yesno" value="no"></td>
                                <td><input type="number" name="iso4-3-4-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-3-4-comments"></td>
                            </tr>
                            <tr>
                                <td>The organization shall apply all the requirements of this standard where applicable to the scope of their QMS.</td>
                                <td><input type="radio" name="iso4-3-5-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-3-5-yesno" value="no"></td>
                                <td><input type="number" name="iso4-3-5-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-3-5-comments"></td>
                            </tr>
                            <tr>
                                <td>Is the Scope available and maintained as documented information?</td>
                                <td><input type="radio" name="iso4-3-6-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-3-6-yesno" value="no"></td>
                                <td><input type="number" name="iso4-3-6-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-3-6-comments"></td>
                            </tr>
                            <tr>
                                <td>Does the Scope state the types of products and services covered?</td>
                                <td><input type="radio" name="iso4-3-7-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-3-7-yesno" value="no"></td>
                                <td><input type="number" name="iso4-3-7-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-3-7-comments"></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><strong>Section Score:</strong></td>
                                <td colspan="2"><span id="iso4-3-total-score">21</span></td>
                                <td><strong>Sec.Avg:</strong> <span id="iso4-3-avg-score">3</span></td>
                                <td><strong>Sec.Max:</strong> 35</td>
                            </tr>
                        </tfoot>
                    </table>
                    
                    <div class="form-group">
                        <label for="iso4-3-comments">Comments:</label>
                        <textarea id="iso4-3-comments" name="iso4-3-general-comments" rows="15" placeholder="Enter additional comments for section 4.3"></textarea>
                    </div>
                </div>

                <!-- Section 4.4.1 -->
                <div class="form-group">
                    <h5>4.4 Quality Management System</h5>
                    <h6>4.4.1 Processes</h6>
                    <table class="iso4-assessment-table">
                        <thead>
                            <tr>
                                <th>Criteria</th>
                                <th>Yes</th>
                                <th>No</th>
                                <th>Sec. Score</th>
                                <th>Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Has the organization established, implemented, maintained and continually improved a QMS, including the processes needed and their interactions, in accordance with the requirements of this ISO?</td>
                                <td><input type="radio" name="iso4-4-1-1-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-4-1-1-yesno" value="no"></td>
                                <td><input type="number" name="iso4-4-1-1-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-4-1-1-comments"></td>
                            </tr>
                            <tr>
                                <td>Has the organization determined the processes needed for the QMS and their application throughout?</td>
                                <td><input type="radio" name="iso4-4-1-2-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-4-1-2-yesno" value="no"></td>
                                <td><input type="number" name="iso4-4-1-2-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-4-1-2-comments"></td>
                            </tr>
                            <tr>
                                <td colspan="5"><strong>The organization shall:</strong></td>
                            </tr>
                            <tr>
                                <td>Determine the inputs required and the outputs expected from these processes;</td>
                                <td><input type="radio" name="iso4-4-1-3-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-4-1-3-yesno" value="no"></td>
                                <td><input type="number" name="iso4-4-1-3-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-4-1-3-comments"></td>
                            </tr>
                            <tr>
                                <td>Determine the sequence and interaction of these processes;</td>
                                <td><input type="radio" name="iso4-4-1-4-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-4-1-4-yesno" value="no"></td>
                                <td><input type="number" name="iso4-4-1-4-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-4-1-4-comments"></td>
                            </tr>
                            <tr>
                                <td>Determine and apply the criteria and methods (including monitoring, measuring and related performance indicators) needed to ensure the effective operation and control of these processes;</td>
                                <td><input type="radio" name="iso4-4-1-5-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-4-1-5-yesno" value="no"></td>
                                <td><input type="number" name="iso4-4-1-5-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-4-1-5-comments"></td>
                            </tr>
                            <tr>
                                <td>Determine the resources needed for these processes and their availability;</td>
                                <td><input type="radio" name="iso4-4-1-6-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-4-1-6-yesno" value="no"></td>
                                <td><input type="number" name="iso4-4-1-6-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-4-1-6-comments"></td>
                            </tr>
                            <tr>
                                <td>Assign the responsibilities and authorities for these processes;</td>
                                <td><input type="radio" name="iso4-4-1-7-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-4-1-7-yesno" value="no"></td>
                                <td><input type="number" name="iso4-4-1-7-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-4-1-7-comments"></td>
                            </tr>
                            <tr>
                                <td>Address the risks and opportunities in accordance with the requirements of Section A of Planning;</td>
                                <td><input type="radio" name="iso4-4-1-8-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-4-1-8-yesno" value="no"></td>
                                <td><input type="number" name="iso4-4-1-8-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-4-1-8-comments"></td>
                            </tr>
                            <tr>
                                <td>Evaluate these processes and implement any changes needed to ensure that these processes achieve their intended results;</td>
                                <td><input type="radio" name="iso4-4-1-9-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-4-1-9-yesno" value="no"></td>
                                <td><input type="number" name="iso4-4-1-9-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-4-1-9-comments"></td>
                            </tr>
                            <tr>
                                <td>Improve the processes and the QMS.</td>
                                <td><input type="radio" name="iso4-4-1-10-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-4-1-10-yesno" value="no"></td>
                                <td><input type="number" name="iso4-4-1-10-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-4-1-10-comments"></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><strong>Section Score:</strong></td>
                                <td colspan="2"><span id="iso4-4-1-total-score">30</span></td>
                                <td><strong>Sec.Avg:</strong> <span id="iso4-4-1-avg-score">3</span></td>
                                <td><strong>Sec.Max:</strong> 50</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <!-- Section 4.4.2 -->
                <div class="form-group">
                    <h6>4.4.2 QMS & Processes</h6>
                    <table class="iso4-assessment-table">
                        <thead>
                            <tr>
                                <th>Criteria</th>
                                <th>Yes</th>
                                <th>No</th>
                                <th>Sec. Score</th>
                                <th>Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="5"><strong>Has the organization:</strong></td>
                            </tr>
                            <tr>
                                <td>Maintained documented information to have confidence that the processes are being carried out as planned?</td>
                                <td><input type="radio" name="iso4-4-2-1-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-4-2-1-yesno" value="no"></td>
                                <td><input type="number" name="iso4-4-2-1-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-4-2-1-comments"></td>
                            </tr>
                            <tr>
                                <td>Retained documented information to have confidence that the processes are being carried out as planned?</td>
                                <td><input type="radio" name="iso4-4-2-2-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-4-2-2-yesno" value="no"></td>
                                <td><input type="number" name="iso4-4-2-2-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-4-2-2-comments"></td>
                            </tr>
                            <tr>
                                <td>Is there a "Master List" of documents and is it current?</td>
                                <td><input type="radio" name="iso4-4-2-3-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-4-2-3-yesno" value="no"></td>
                                <td><input type="number" name="iso4-4-2-3-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-4-2-3-comments"></td>
                            </tr>
                            <tr>
                                <td>How is it controlled and what are the typical retentions periods for critical records?</td>
                                <td><input type="radio" name="iso4-4-2-4-yesno" value="yes"></td>
                                <td><input type="radio" name="iso4-4-2-4-yesno" value="no"></td>
                                <td><input type="number" name="iso4-4-2-4-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso4-4-2-4-comments"></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><strong>Section Score:</strong></td>
                                <td colspan="2"><span id="iso4-4-2-total-score">12</span></td>
                                <td><strong>Sec.Avg:</strong> <span id="iso4-4-2-avg-score">3</span></td>
                                <td><strong>Sec.Max:</strong> 20</td>
                            </tr>
                        </tfoot>
                    </table>
                    
                    <div class="form-group">
                        <label for="iso4-4-2-comments">Comments:</label>
                        <textarea id="iso4-4-2-comments" name="iso4-4-2-general-comments" rows="8" placeholder="Enter additional comments for section 4.4.2"></textarea>
                    </div>
                </div>
            </fieldset>
        `;
    }
};

