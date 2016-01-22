import Test from 'legit-tests'
import { expect } from 'chai'

import Home from '~/app/views/home/home'
import Login from '~/app/views/home/login'
import Registration from '~/app/views/home/registration'

describe('Home', () => {
    it('should render the login and registration components', () => {
        Test(<Home />).
        find(Login).
        test(({ elements }) => {
            console.log(elements)
            expect(elements.login).not.to.be.empty
        });
    });
    it('should render the registration components', () => {
       Test(<Home />).
       find(Registration).
       test(({ elements }) => {
           expect(elements.registration).not.to.be.empty
       });
    });
});