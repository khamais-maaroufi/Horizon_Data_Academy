import { Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";

const AddLessonForm = ({ values, setValues, handleAddLesson, uploading }) => {
  const [startDate, setStartDate] = useState(null);
  const [value, setValue] = React.useState(new Date());

  return (
    <div className="container pt-3">
      <form onSubmit={handleAddLesson}>
        <input
          type="text"
          className="form-control square"
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          value={values.title}
          placeHolder="Title"
          autoFocus
          required
        ></input>

        <textarea
          className="form-control mt-3"
          col="7"
          row="7"
          onChange={(e) => setValues({ ...values, content: e.target.value })}
          value={values.content}
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
          required
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticTimePicker
            displayStaticWrapperAs="mobile"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              setValues({
                ...values,
                time:
                  newValue.getHours() +
                  ":" +
                  newValue.getMinutes() +
                  ":" +
                  newValue.getSeconds(),
              });
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

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
