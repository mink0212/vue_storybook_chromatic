// Button.stories.js

import  MockAdapter from 'axios-mock-adapter';
import axiosInstance from '../../utils/axios'

import MyPage from '../../views/MyPage.vue';

const mock = new MockAdapter(axiosInstance);

mock.onGet('http://localhost/v1/apt/test').reply(200, {"sample": "OK"})

export default {
  component: MyPage,
  title: 'views/MyPage',
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MyPage },
    template: `<my-page /> `
})


export const Default = Template.bind({})
