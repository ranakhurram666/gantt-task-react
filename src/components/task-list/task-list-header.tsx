import React from "react";
import styles from "./task-list-header.module.css";

export const TaskListHeaderDefault: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
  return (
    <div
      className={styles.ganttTable}
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
        width: '100%',
      }}
    >
      <div
        className={styles.ganttTable_Header}
        style={{
          height: headerHeight - 2,
        }}
      >
        <div
          className={styles.ganttTable_HeaderItem}
          style={{
            minWidth: '1px',
          }}
        ></div>
        <div
          className={styles.ganttTable_HeaderItem}
          style={{
            minWidth: '205px',
            verticalAlign: 'bottom'
          }}
        >
          <p className={styles.ganttChart_headerp} style={{ paddingTop:headerHeight * 0.1,height: headerHeight * .45 }}>Name</p>
        </div>
        <div
          className={styles.ganttTable_HeaderSeparator}
          style={{
            height: headerHeight,
            // marginTop: headerHeight * 0.2,
          }}
        />
        <div
          className={styles.ganttTable_HeaderItem}
          style={{
            minWidth: rowWidth,
            textAlign: 'center',
            verticalAlign: 'bottom'
          }}
        >
          <p className={styles.ganttChart_headerp} style={{ paddingTop:headerHeight * 0.1,height: headerHeight * .45 }}>Priority</p>
        </div>
        <div
          className={styles.ganttTable_HeaderSeparator}
          style={{
            height: headerHeight,
            // marginTop: headerHeight * 0.2,
          }}
        />
        <div
          className={styles.ganttTable_HeaderItem}
          style={{
            minWidth: rowWidth,
            verticalAlign: 'bottom'
          }}
        >
          <p className={styles.ganttChart_headerp} style={{ paddingTop:headerHeight * 0.1,height: headerHeight * .45 }}>From</p>
        </div>
        <div
          className={styles.ganttTable_HeaderSeparator}
          style={{
            height: headerHeight,
            // marginTop: headerHeight * 0.25,
          }}
        />
        <div
          className={styles.ganttTable_HeaderItem}
          style={{
            minWidth: rowWidth,
            verticalAlign: 'bottom'
          }}
        >
          <p className={styles.ganttChart_headerp} style={{ paddingTop:headerHeight * 0.1,height: headerHeight * .45 }}>To</p>
        </div>
      </div>
    </div>
  );
};
