// IMPORT MODULES under test here:
import { renderPost } from '../render-utils.js';

const test = QUnit.test;

test('renderPost Function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="post"><h3 class="title">example post</h3><p class="details">details</p><p class="contact">contact: 1-800-EXAMPLE</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPost({
        title: 'example post',
        description: 'details',
        contact: '1-800-EXAMPLE'
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
