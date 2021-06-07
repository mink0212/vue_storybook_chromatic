// Button.stories.js

import MyPage from '../../views/MyPage';

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
