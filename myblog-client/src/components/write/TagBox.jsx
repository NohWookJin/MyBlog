import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../../lib/palette";

const TagItem = React.memo(({ tag, onRemove }) => (
  <Tag onClick={() => onRemove(tag)}>{tag}</Tag>
));

const TagList = React.memo(({ tags, onRemove }) => (
  <TagListBlock>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListBlock>
));

const TagBox = ({ tags, onChangeTags }) => {
  const [input, setInput] = useState("");
  const [localTags, setLocalTags] = useState([]);

  const insertTags = useCallback(
    (tag) => {
      if (!tag) return;
      if (localTags.includes(tag)) return;
      const nextTags = [...localTags, tag];
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags]
  );

  const onRemove = useCallback(
    (tag) => {
      const nextTags = localTags.filter((t) => t !== tag);
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags]
  );

  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      insertTags(input.trim());
      setInput("");
    },
    [input, insertTags]
  );

  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

  return (
    <StyledTagBox>
      <StyledBorder></StyledBorder>
      <StyledTagForm onSubmit={onSubmit}>
        <TagList tags={localTags} onRemove={onRemove} />
        <input
          placeholder="태그를 입력하세요"
          value={input}
          onChange={onChange}
        />
      </StyledTagForm>
    </StyledTagBox>
  );
};

export default TagBox;

const StyledTagBox = styled.div`
  width: 100%;
`;
const StyledBorder = styled.div`
  width: 6%;
  border: 3px solid ${palette.gray[7]};
  margin-bottom: 1rem;
`;

const StyledTagForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 100%;
  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }

  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }
  button {
    cursor: pointer;
    padding: 0 1rem;
    border: none;
    background-color: ${palette.gray[8]};
    color: white;
    font-weight: bold;
    &:hover {
      background: ${palette.gray[6]};
    }
  }
`;

const Tag = styled.div`
  margin-right: 0.5rem;
  color: ${palette.teal[6]};
  background-color: ${palette.gray[1]};
  padding: 0.3rem 0.6rem;
  border-radius: 10px;
  font-size: 0.85rem;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  margin-bottom: 0.6rem;
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;
