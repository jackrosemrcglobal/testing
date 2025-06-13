// Manufacturer Assessment ISO5 form section
export const ManufacturerAssessmentISO5Section = {
    create() {
        return `
            <fieldset data-section-id="manufacturer-assessment-iso5">
                <legend>Manufacturer Assessment ISO5</legend>
                
                <div class="form-group">
                    <h4>5.0 Leadership</h4>
                </div>

                <!-- Section 5.1.1 -->
                <div class="form-group">
                    <h5>5.1.1 Leadership & Commitment</h5>
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
                                <td colspan="5"><strong>Has top management demonstrated leadership and commitment with respect to the QMS by:</strong></td>
                            </tr>
                            <tr>
                                <td>Taking accountability for the effectiveness of the QMS;</td>
                                <td><input type="radio" name="iso5-1-1-1-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-1-1-1-yesno" value="no"></td>
                                <td><input type="number" name="iso5-1-1-1-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-1-1-1-comments"></td>
                            </tr>
                            <tr>
                                <td>Ensuring that the quality policy and objectives are established for the QMS and are compatible with the context and strategic direction of the organization;</td>
                                <td><input type="radio" name="iso5-1-1-2-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-1-1-2-yesno" value="no"></td>
                                <td><input type="number" name="iso5-1-1-2-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-1-1-2-comments"></td>
                            </tr>
                            <tr>
                                <td>Ensuring the integration of the QMS into the organization's business processes;</td>
                                <td><input type="radio" name="iso5-1-1-3-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-1-1-3-yesno" value="no"></td>
                                <td><input type="number" name="iso5-1-1-3-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-1-1-3-comments"></td>
                            </tr>
                            <tr>
                                <td>Promoting the use of the process approach and risk-based thinking;</td>
                                <td><input type="radio" name="iso5-1-1-4-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-1-1-4-yesno" value="no"></td>
                                <td><input type="number" name="iso5-1-1-4-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-1-1-4-comments"></td>
                            </tr>
                            <tr>
                                <td>Ensuring that the resources needed for the QMS are available;</td>
                                <td><input type="radio" name="iso5-1-1-5-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-1-1-5-yesno" value="no"></td>
                                <td><input type="number" name="iso5-1-1-5-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-1-1-5-comments"></td>
                            </tr>
                            <tr>
                                <td>Communicating the importance of effective quality management and conformance to the QMS requirements;</td>
                                <td><input type="radio" name="iso5-1-1-6-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-1-1-6-yesno" value="no"></td>
                                <td><input type="number" name="iso5-1-1-6-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-1-1-6-comments"></td>
                            </tr>
                            <tr>
                                <td>Ensuring that the QMS achieves its intended results;</td>
                                <td><input type="radio" name="iso5-1-1-7-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-1-1-7-yesno" value="no"></td>
                                <td><input type="number" name="iso5-1-1-7-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-1-1-7-comments"></td>
                            </tr>
                            <tr>
                                <td>Engaging, directing and supporting persons to contribute to the effectiveness of the QMS;</td>
                                <td><input type="radio" name="iso5-1-1-8-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-1-1-8-yesno" value="no"></td>
                                <td><input type="number" name="iso5-1-1-8-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-1-1-8-comments"></td>
                            </tr>
                            <tr>
                                <td>Promoting improvements;</td>
                                <td><input type="radio" name="iso5-1-1-9-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-1-1-9-yesno" value="no"></td>
                                <td><input type="number" name="iso5-1-1-9-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-1-1-9-comments"></td>
                            </tr>
                            <tr>
                                <td>Supporting other relevant management roles to demonstrate their leadership as it applies to their areas of responsibility.</td>
                                <td><input type="radio" name="iso5-1-1-10-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-1-1-10-yesno" value="no"></td>
                                <td><input type="number" name="iso5-1-1-10-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-1-1-10-comments"></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><strong>Section Score:</strong></td>
                                <td colspan="2"><span id="iso5-1-1-total-score">30</span></td>
                                <td><strong>Sec.Avg:</strong> <span id="iso5-1-1-avg-score">3</span></td>
                                <td><strong>Sec.Max:</strong> 50</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <!-- Section 5.1.2 -->
                <div class="form-group">
                    <h5>5.1.2 Customer Focus</h5>
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
                                <td colspan="5"><strong>Has top management demonstrated leadership and commitment with respect to customer focus by ensuring that:</strong></td>
                            </tr>
                            <tr>
                                <td>Customer applicable statutory and regulatory requirements are determined, understood and consistently met;</td>
                                <td><input type="radio" name="iso5-1-2-1-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-1-2-1-yesno" value="no"></td>
                                <td><input type="number" name="iso5-1-2-1-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-1-2-1-comments"></td>
                            </tr>
                            <tr>
                                <td>The risks and opportunities that can affect conformity of products and services and the ability to enhance customer satisfaction are determined and addressed;</td>
                                <td><input type="radio" name="iso5-1-2-2-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-1-2-2-yesno" value="no"></td>
                                <td><input type="number" name="iso5-1-2-2-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-1-2-2-comments"></td>
                            </tr>
                            <tr>
                                <td>The focus on enhancing customer satisfaction is maintained.</td>
                                <td><input type="radio" name="iso5-1-2-3-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-1-2-3-yesno" value="no"></td>
                                <td><input type="number" name="iso5-1-2-3-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-1-2-3-comments"></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><strong>Section Score:</strong></td>
                                <td colspan="2"><span id="iso5-1-2-total-score">9</span></td>
                                <td><strong>Sec.Avg:</strong> <span id="iso5-1-2-avg-score">3</span></td>
                                <td><strong>Sec.Max:</strong> 15</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <!-- Section 5.2.1 -->
                <div class="form-group">
                    <h5>5.2 Policy</h5>
                    <h6>5.2.1 Establishing the Quality Policy</h6>
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
                                <td colspan="5"><strong>Top management shall establish, implement and maintain a quality policy that:</strong></td>
                            </tr>
                            <tr>
                                <td>Is appropriate to the purpose and context of the organization and supports its strategic direction</td>
                                <td><input type="radio" name="iso5-2-1-1-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-2-1-1-yesno" value="no"></td>
                                <td><input type="number" name="iso5-2-1-1-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-2-1-1-comments"></td>
                            </tr>
                            <tr>
                                <td>Provides a framework for setting quality objectives</td>
                                <td><input type="radio" name="iso5-2-1-2-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-2-1-2-yesno" value="no"></td>
                                <td><input type="number" name="iso5-2-1-2-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-2-1-2-comments"></td>
                            </tr>
                            <tr>
                                <td>Includes a commitment to satisfy applicable requirements</td>
                                <td><input type="radio" name="iso5-2-1-3-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-2-1-3-yesno" value="no"></td>
                                <td><input type="number" name="iso5-2-1-3-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-2-1-3-comments"></td>
                            </tr>
                            <tr>
                                <td>Includes a commitment to continual improvement of the QMS</td>
                                <td><input type="radio" name="iso5-2-1-4-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-2-1-4-yesno" value="no"></td>
                                <td><input type="number" name="iso5-2-1-4-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-2-1-4-comments"></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><strong>Section Score:</strong></td>
                                <td colspan="2"><span id="iso5-2-1-total-score">12</span></td>
                                <td><strong>Sec.Avg:</strong> <span id="iso5-2-1-avg-score">3</span></td>
                                <td><strong>Sec.Max:</strong> 20</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <!-- Section 5.2.2 -->
                <div class="form-group">
                    <h6>5.2.2 Communicating the Quality Policy</h6>
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
                                <td colspan="5"><strong>The quality policy shall:</strong></td>
                            </tr>
                            <tr>
                                <td>Be available and maintained as documented information;</td>
                                <td><input type="radio" name="iso5-2-2-1-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-2-2-1-yesno" value="no"></td>
                                <td><input type="number" name="iso5-2-2-1-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-2-2-1-comments"></td>
                            </tr>
                            <tr>
                                <td>Be communicated, understood and applied within the organization;</td>
                                <td><input type="radio" name="iso5-2-2-2-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-2-2-2-yesno" value="no"></td>
                                <td><input type="number" name="iso5-2-2-2-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-2-2-2-comments"></td>
                            </tr>
                            <tr>
                                <td>Be available to the relevant parties, as appropriate.</td>
                                <td><input type="radio" name="iso5-2-2-3-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-2-2-3-yesno" value="no"></td>
                                <td><input type="number" name="iso5-2-2-3-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-2-2-3-comments"></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><strong>Section Score:</strong></td>
                                <td colspan="2"><span id="iso5-2-2-total-score">9</span></td>
                                <td><strong>Sec.Avg:</strong> <span id="iso5-2-2-avg-score">3</span></td>
                                <td><strong>Sec.Max:</strong> 15</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <!-- Section 5.3 -->
                <div class="form-group">
                    <h5>5.3 Organizational Roles, Responsibilities & Authorities</h5>
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
                                <td>Has top management ensured that the responsibilities and authorities for relevant roles are assigned, communicated and understood within the organization?</td>
                                <td><input type="radio" name="iso5-3-1-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-3-1-yesno" value="no"></td>
                                <td><input type="number" name="iso5-3-1-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-3-1-comments"></td>
                            </tr>
                            <tr>
                                <td colspan="5"><strong>Has top management assigned the responsibility and authority for:</strong></td>
                            </tr>
                            <tr>
                                <td>Ensuring the QMS conforms to the requirements of the ISO9001 standard;</td>
                                <td><input type="radio" name="iso5-3-2-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-3-2-yesno" value="no"></td>
                                <td><input type="number" name="iso5-3-2-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-3-2-comments"></td>
                            </tr>
                            <tr>
                                <td>Ensuring the processes are delivering their intended outputs</td>
                                <td><input type="radio" name="iso5-3-3-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-3-3-yesno" value="no"></td>
                                <td><input type="number" name="iso5-3-3-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-3-3-comments"></td>
                            </tr>
                            <tr>
                                <td>Reporting on the performance of the QMS and on opportunities for improvement (see Section A of Improvement) to top management;</td>
                                <td><input type="radio" name="iso5-3-4-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-3-4-yesno" value="no"></td>
                                <td><input type="number" name="iso5-3-4-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-3-4-comments"></td>
                            </tr>
                            <tr>
                                <td>Ensuring the promotion of customer focus throughout the organization;</td>
                                <td><input type="radio" name="iso5-3-5-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-3-5-yesno" value="no"></td>
                                <td><input type="number" name="iso5-3-5-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-3-5-comments"></td>
                            </tr>
                            <tr>
                                <td>Ensuring that the integrity of the QMS is maintained when changes are planned and implemented.</td>
                                <td><input type="radio" name="iso5-3-6-yesno" value="yes"></td>
                                <td><input type="radio" name="iso5-3-6-yesno" value="no"></td>
                                <td><input type="number" name="iso5-3-6-score" min="0" max="5" value="3"></td>
                                <td><input type="text" name="iso5-3-6-comments"></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><strong>Section Score:</strong></td>
                                <td colspan="2"><span id="iso5-3-total-score">18</span></td>
                                <td><strong>Sec.Avg:</strong> <span id="iso5-3-avg-score">3</span></td>
                                <td><strong>Sec.Max:</strong> 30</td>
                            </tr>
                        </tfoot>
                    </table>
                    
                    <div class="form-group">
                        <label for="iso5-3-comments">Comments:</label>
                        <textarea id="iso5-3-comments" name="iso5-3-general-comments" rows="8" placeholder="Enter additional comments for section 5.3"></textarea>
                    </div>
                </div>
            </fieldset>
        `;
    }
};