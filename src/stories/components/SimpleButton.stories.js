// Button.stories.js

import SimpleButton from '../../components/Button/SimpleButton';

export default {
  component: SimpleButton,
  title: 'Components/SimpleButton',
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { SimpleButton },
    template: `<simple-button v-bind="$props" v-on="$props"/> `
})


export const Primary = Template.bind({})
Primary.args = {
  type: "primary",
  text: 'プライマリーボタン'
}

export const Inversion = Template.bind({})
Inversion.args = {
  type: "inversion",
  text: 'インバーションボタン'
}

export const Emphasize = Template.bind({})
Emphasize.args = {
  type: "emphasize",
  text: '強調ボタン'
}

export const Bold = Template.bind({})
Bold.args = {
  bold: true,
  text: 'ボールドボタン'
}

