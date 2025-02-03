import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

// Storybook 메타 설정
const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"], // 자동 문서화를 활성화
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "danger"], // 버튼 색상 옵션
      description: "버튼의 색상 스타일",
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"], // 버튼 크기 옵션
      description: "버튼의 크기",
    },
    onClick: {
      action: "clicked", // 클릭 이벤트 로깅
      description: "버튼 클릭 핸들러",
    },
  },
};
export default meta;

// 기본 템플릿 설정
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    color: "primary",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    color: "secondary",
    size: "large",
  },
};

export const Danger: Story = {
  args: {
    label: "Danger Button",
    color: "danger",
    size: "small",
  },
};
