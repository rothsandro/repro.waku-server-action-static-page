"use client";

export interface ChildProps {
  run: () => Promise<string>;
}

export const Child = (props: ChildProps) => {
  const onClick = async () => {
    const result = await props.run();
    console.log(result);
  };

  return (
    <div>
      <button type="button" onClick={onClick}>
        Trigger Server Action
      </button>
    </div>
  );
};
