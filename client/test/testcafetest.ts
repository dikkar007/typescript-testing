import { Selector } from 'testcafe';

const checkbox = Selector('#check');

fixture `My fixture`
    .page `http://localhost:3005/`;

test('Click a check box and check its state', async t => {
    await t
        .click(checkbox)
        .expect(checkbox.checked).ok();
});