import { Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddLessonForm = ({ values, setValues, handleAddLesson, uploading }) => {
  const [startDate, setStartDate] = useState(null);

  return (
    <div className="container pt-3">
      <form onSubmit={handleAddLesson}>
        <input
          type="text"
          className="form-control square"
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          values={values.title}
          placeHolder="Title"
          autoFocus
          required
        ></input>

        <textarea
          className="form-control mt-3"
          col="7"
          row="7"
          onChange={(e) => setValues({ ...values, content: e.target.value })}
          values={values.content}
          placeHolder="Content"
        ></textarea>

        <DatePicker
          selected={startDate}
          onSelect={(date) => {
            setStartDate(date);
            setValues({ ...values, start_date: date.toDateString() });
          }}
          className="mt-3"
          isClearable
          showYearDropdown
          scrollableMonthYearDropdown
        />

        <Button
          onClick={handleAddLesson}
          className="col mt-3"
          size="large"
          type="primary"
          uploading={uploading}
          shape="round"
        >
          Save Lesson
        </Button>
      </form>
    </div>
  );
};

export default AddLessonForm;
