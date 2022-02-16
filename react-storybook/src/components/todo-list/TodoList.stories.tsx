import { Meta, Story } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { TodoList } from "./TodoList";

export default {
  title: "TodoList",
  component: TodoList,
} as Meta;

const Template: Story = (args) => <TodoList {...args} />;
export const Default = Template.bind({});
Default.play = async({canvasElement}) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId('textarea'), 'Hello World!');
    await userEvent.click(canvas.getByRole('button', {name: '追加'}));
    await userEvent.type(canvas.getByTestId('textarea'), 'Hello World2!');
    await userEvent.click(canvas.getByRole('button', {name: '追加'}));
    await userEvent.click(canvas.getByRole('button', {name: 'リセット'}));
}