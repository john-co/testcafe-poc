import { Selector } from 'testcafe';
import XPathSelector from './xpathSelector';

fixture`Testcafe study liferay forms`
    .page`https://forms.liferay.com/web/forms/shared/-/form/122548`;

test('The text "party rock" must be present in the form', async t => {
    await t
    .expect(Selector('.lfr-ddm-form-page-description').innerText).contains('party rock')

});

test('All fields must be mandatory', async t => {
    // const labelField = Selector('label')
    const formFeedback = XPathSelector("//label/span[contains(@class,'form-feedback-group')]")
    const submitButton = Selector('button').withAttribute('type', 'submit')

    await t
    .click(submitButton)
    .exists(Selector(formFeedback).nth(1).withText('This field is required'))
    .exists(Selector(formFeedback).nth(2).withText('This field is required'))
    .exists(Selector(formFeedback).nth(3).withText('This field is required'))

    .wait(5000)

});

test('A success message should appear after form has been successfully submitted', async t => {
    const textField = Selector('label')
    .sibling('input')
    .withAttribute('class', 'form-control ddm-field-text')

    const dateField = Selector('div')
    .withAttribute('data-field-name', 'WhatIsTheDateOfYourBirth')
    .child('input')
    .withAttribute('class', 'form-control input-group-inset input-group-inset-after')

    const textAreaField = Selector('textarea')

    await t
    .typeText(textField, 'Blahblah')
    .wait(3000)

    .typeText(dateField, '04042022')
    .wait(3000)

    .typeText(textAreaField, 'description test')
    .wait(3000)
});



// What we will cover in our automation:
// - The text “party rock” must be present in the form;
// - All fields must be mandatory and contain an error message if they are not filled;
// - A successful message should appear after the form has been successfully submitted;