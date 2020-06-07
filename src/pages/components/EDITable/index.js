import React, { Component } from 'react'
import { Checkbox } from 'carbon-components-react'
import {
  ediTable,
  ediNameCell,
  ediTableContainer,
  ediTableCell,
  ediEmptyCell,
  ediCheckBoxCell,
  ediClassRow,
  ediClassTextCell,
  editControlRow,
  editHeaderRow,
  ediCellRect,
} from './EDITable.module.scss'

class EDITable extends Component {
  state = {
    checkedCols: [],
    uncheckedCols: [],
    headers: [],
    headerClassData: {},
  }

  componentDidMount() {
    this.setState({
      uncheckedCols: [...Object.keys(this.props.headersData)],
      checkedCols: [],
      headerClassData: { ...this.props.headerClassData },
    })
  }

  onCheckBoxClicked = (value, id) => {
    console.log('checkbox clicked', id, value)
    let { checkedCols, uncheckedCols, headerClassData } = this.state
    const { headersData } = this.props

    if (value) {
      const index = uncheckedCols.indexOf(id)
      if (index !== -1) uncheckedCols.splice(index, 1)

      checkedCols.push(id)
      checkedCols.sort()

      if (headerClassData[headersData[id].class].colCount > 0) {
        headerClassData[headersData[id].class].colCount--
      }
    } else {
      const index = checkedCols.indexOf(id)
      if (index !== -1) checkedCols.splice(index, 1)

      uncheckedCols.push(id)
      uncheckedCols.sort()

      headerClassData[headersData[id].class].colCount++
    }

    this.setState({ checkedCols, uncheckedCols })
  }

  render() {
    const { checkedCols, uncheckedCols, headerClassData } = this.state
    const { headersData, rows } = this.props

    return (
      <div title="EDIFact Table" className={ediTableContainer}>
        <table size="short" className={ediTable}>
          <tbody>
            <tr key="header-class-row" className={ediClassRow}>
              <td key="name" className={ediNameCell}>
                <div />
              </td>

              {checkedCols.map((col) => (
                <td
                  key={`header-class-row-${headersData[col].key}`}
                  className={ediTableCell}
                >
                  <div></div>
                </td>
              ))}

              <td key="header-row-empty" className={ediEmptyCell}>
                <div />
              </td>

              {Object.keys(headerClassData).map((item) => {
                return headerClassData[item].colCount > 0 ? (
                  <td
                    className={ediClassTextCell}
                    style={{
                      backgroundColor: headerClassData[item].color,
                    }}
                    colSpan={headerClassData[item].colCount}
                  >
                    <div>{headerClassData[item].text}</div>
                  </td>
                ) : (
                  ''
                )
              })}
            </tr>

            <tr key="header-row" className={editHeaderRow}>
              <td key="name" className={ediNameCell}>
                <div></div>
              </td>

              {checkedCols.map((col) => (
                <td
                  key={`header-row-${headersData[col].key}`}
                  className={ediTableCell}
                  style={{
                    backgroundColor:
                      headerClassData[headersData[col].class].color,
                  }}
                >
                  <div>{headersData[col].header}</div>
                </td>
              ))}

              <td key="header-row-empty" className={ediEmptyCell}>
                <div />
              </td>

              {uncheckedCols.map((col) => (
                <td
                  key={`header-row-${headersData[col].key}`}
                  className={ediTableCell}
                  style={{
                    backgroundColor:
                      headerClassData[headersData[col].class].color,
                  }}
                >
                  <div>{headersData[col].header}</div>
                </td>
              ))}
            </tr>

            <tr key="control-row" className={editControlRow}>
              <td key="name" className={ediNameCell}>
                <div>Compare</div>
              </td>

              {checkedCols.map((col) => (
                <td
                  key={`control-row-${headersData[col].key}`}
                  className={ediCheckBoxCell}
                  style={{
                    backgroundColor:
                      headerClassData[headersData[col].class].color,
                  }}
                >
                  <div>
                    <Checkbox
                      labelText=""
                      id={`${headersData[col].key}`}
                      onChange={this.onCheckBoxClicked}
                      checked
                    />
                  </div>
                </td>
              ))}

              <td key="control-row-empty" className={ediEmptyCell}>
                <div />
              </td>

              {uncheckedCols.map((col) => (
                <td
                  key={`${headersData[col].key}`}
                  className={ediCheckBoxCell}
                  style={{
                    backgroundColor:
                      headerClassData[headersData[col].class].color,
                  }}
                >
                  <div>
                    <Checkbox
                      labelText=""
                      id={`${headersData[col].key}`}
                      onChange={this.onCheckBoxClicked}
                    />
                  </div>
                </td>
              ))}
            </tr>

            {rows.map((row) => (
              <tr key={row.id}>
                <td key="name" className={ediNameCell}>
                  <div>{row.name}</div>
                </td>

                {checkedCols.map((col) => (
                  <td
                    key={`${headersData[col].key}-${row.id}`}
                    className={ediTableCell}
                    style={{
                      backgroundColor:
                        headerClassData[headersData[col].class].color,
                    }}
                  >
                    <div
                      className={row[headersData[col].key] ? ediCellRect : ''}
                    ></div>
                  </td>
                ))}

                <td key={`row-empty${row.id}`} className={ediEmptyCell}>
                  <div />
                </td>

                {uncheckedCols.map((col) => (
                  <td
                    key={`${headersData[col].key}-${row.id}`}
                    className={ediTableCell}
                    style={{
                      backgroundColor:
                        headerClassData[headersData[col].class].color,
                    }}
                  >
                    <div
                      className={row[headersData[col].key] ? ediCellRect : ''}
                    ></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default EDITable
