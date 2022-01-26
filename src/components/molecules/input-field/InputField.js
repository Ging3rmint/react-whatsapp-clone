import React, { useState } from "react";
import IconButton from "../../atoms/icon-button/IconButton";
import Icon from "../../atoms/icon/Icon";

const InputField = ({
  label,
  onTextChangeHandler,
  onToggleEditHandler,
  hasWordCount,
  hasEmoji,
}) => {
  const maxTextLength = 25;
  const [wordCount, setWordCount] = useState(maxTextLength);
  const [isEdit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (e) => {
    if (isEdit) {
      const value = e.currentTarget.value;
      const textLength = value.length;
      let wordC = maxTextLength;
      wordC -= textLength;

      if (wordC < 0) {
        wordC = 0;
        setWordCount(wordC);
      } else {
        setInputValue(value);
        setWordCount(wordC);
        onTextChangeHandler(value);
      }
    }
  };

  const onToggleHandler = () => {
    setEdit((edit) => !edit);
    onToggleEditHandler(isEdit);
  };

  return (
    <div className='input-field'>
      <span>{label}</span>
      <div className={`input-field__wrapper ${isEdit ? "active" : ""}`}>
        <input type='text' value={inputValue} onChange={onChangeHandler} />
        <div className='input-field__wrapper--controls'>
          {hasWordCount && isEdit ? <span>{wordCount}</span> : ""}
          {isEdit && <IconButton icon='hipster' color='#444' size={18} />}

          <IconButton
            icon={isEdit ? "checkmark" : "pencil"}
            color='#444'
            size={18}
            onPress={onToggleHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default InputField;
