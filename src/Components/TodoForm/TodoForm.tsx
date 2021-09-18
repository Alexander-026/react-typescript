import React, { FunctionComponent, useRef, KeyboardEvent } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: FunctionComponent<TodoFormProps> = (props) => {
  //  const [title, setTitle] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  //  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //    setTitle(e.target.value);
  //  };

  const keyPressHandler = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      //alert(title);
      //setTitle('')
      if (ref.current!.value === "") {
        return null;
      }

      props.onAdd(ref.current!.value);
      //console.log(ref.current!.value)
      ref.current!.value = "";
    }
  };
  return (
    <div className="input_field mt-2">
      <label htmlFor="title" className="active">
        Input work name
      </label>
      <input
        //  onChange={changeHandler}
        onKeyPress={keyPressHandler}
        //  value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Input work name"
      />
    </div>
  );
};
