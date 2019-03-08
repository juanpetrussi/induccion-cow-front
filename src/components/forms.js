import React, { Component } from 'react';

class Forms extends Component {
    render() {
        return (
            <div>
                <h3>Punto 3 - Flujo de pago (V1)</h3>

                <form action="http://localhost:4567/induccion/punto3" method="POST" id="pay" name="pay" >
                        <ul>
                            <li>
                                <label>Email</label>
                                <input id="email" name="email" type="email" placeholder="test_user_19653727@testuser.com"/>
                            </li>

                            <li>
                                <label>Amount:</label>
                                <input type="text" id="amount" name="amount" data-checkout="count" placeholder="555" />
                            </li>

                            <li>
                                <label>Credit card number:</label>
                                <input type="text" id="cardNumber" data-checkout="cardNumber" placeholder="4509 9535 6623 3704"/>
                            </li>
                            <li>
                                <label>Security code:</label>
                                <input type="text" id="securityCode" data-checkout="securityCode" placeholder="123" />
                            </li>

                            <li>
                                <label>Installments:</label>
                                <select id="installment" name="installment" data-checkout="installment" placeholder="Cuotas"></select>
                            </li>

                            <li>
                                <label>Expiration month:</label>
                                <input type="text" id="cardExpirationMonth" data-checkout="cardExpirationMonth" placeholder="12"/>
                            </li>
                            <li>
                                <label>Expiration year:</label>
                                <input type="text" id="cardExpirationYear" data-checkout="cardExpirationYear" placeholder="2015" />
                            </li>
                            <li>
                                <label>Card holder name:</label>
                                <input type="text" id="cardholderName" data-checkout="cardholderName" placeholder="APRO" />
                            </li>
                            <li>
                                <label>Document type:</label>
                                <select id="docType" data-checkout="docType"></select>
                            </li>
                            <li>
                                <label>Document number:</label>
                                <input type="text" id="docNumber" data-checkout="docNumber" placeholder="12345678" />
                            </li>
                        </ul>
                        <input type="hidden" id="paymentMethodId" name="paymentMethodId" />
                        <input type="submit" className="mercadopago-button"  value="Pay!" />
                </form>
            </div>
        );
    }
}

export default Forms;