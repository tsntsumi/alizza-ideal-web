import * as React from "react"
import styled from "styled-components"
import { Trans } from "gatsby-plugin-react-i18next"

export const DisastersStyles = styled.section`
  table {
    position: relative;
    align-contents: center;
    border: 2px solid var(--key-dark-color);
    margin: 1em var(--borderSpacing);
    border-radius: 0.5em;
    width: 80%;
    min-width: 280px;

    thead {
      background-color: var(--key-color);
      color: white;
      th {
        text-align: center;
        width: 30%;
      }
    }

    tbody {
    }

    caption {
      background-color: var(--key-dark-color);
      color: white;
    }

    th,
    td {
      padding: 0.5em 1em;
      virtical-align: middle;
      padding-bottom: auto;
    }

    th {
      background-color: var(--key-dark-color);
      color: white;
    }

    tr:nth-child(odd) td {
      background-color: #eee;
    }
  }
`

export const CenturyDisasterInTheWorld = () => {
  return (
    <DisastersStyles>
      <table>
        <caption>
          <Trans>【ここ30年の世界的災厄】</Trans>
        </caption>
        <tr>
          <th>
            1990<Trans>年</Trans>
          </th>
          <td>
            <Trans>バブル崩壊</Trans>
          </td>
        </tr>
        <tr>
          <th style={{ whiteSpace: "nowrap" }}>
            2000<Trans>年台</Trans>
          </th>
          <td>
            <Trans>米国でITバブルの崩壊</Trans>
          </td>
        </tr>
        <tr>
          <th style={{ whiteSpace: "nowrap" }}>
            2010<Trans>年近辺</Trans>
          </th>
          <td>
            <Trans>リーマンショックに代表される金融危機</Trans>
          </td>
        </tr>
        <tr>
          <th></th>
          <td>
            <Trans>ギリシャショックを発端とした欧州の信用危機</Trans>
          </td>
        </tr>
        <tr>
          <th>
            2020<Trans>年</Trans>
          </th>
          <td>
            <Trans>新型コロナウイルスの感染拡大</Trans>
          </td>
        </tr>
        <tr>
          <th>
            2022<Trans>年</Trans>
          </th>
          <td>
            <Trans>ウクライナ・ロシア戦争、または第３次世界大戦の始まり</Trans>
          </td>
        </tr>
      </table>
    </DisastersStyles>
  )
}

export const CenturyDisasterInJapan = () => {
  return (
    <DisastersStyles>
      <table>
        <caption>
          <Trans>【ここ10年の日本における災厄】</Trans>
        </caption>
        <tr>
          <th>
            2011<Trans>年</Trans>
          </th>
          <td>
            <Trans>東日本大震災</Trans>
          </td>
        </tr>
        <tr>
          <th>
            2014<Trans>年</Trans>
          </th>
          <td>
            <Trans>広島北部豪雨</Trans>
          </td>
        </tr>
        <tr>
          <th>
            2015<Trans>年</Trans>
          </th>
          <td>
            <Trans>台風17号（鬼怒川氾濫）</Trans>
          </td>
        </tr>
        <tr>
          <th>
            2016<Trans>年</Trans>
          </th>
          <td>
            <Trans>熊本地震</Trans>
          </td>
        </tr>
        <tr>
          <th>
            2017<Trans>年</Trans>
          </th>
          <td>
            <Trans>九州北部豪雨</Trans>
          </td>
        </tr>
        <tr>
          <th>
            2018<Trans>年</Trans>
          </th>
          <td>
            <Trans>西日本豪雨</Trans>
          </td>
        </tr>
        <tr>
          <th></th>
          <td>
            <Trans>大阪北部地震</Trans>
          </td>
        </tr>
        <tr>
          <th></th>
          <td>
            <Trans>北海道胆振東部地震</Trans>
          </td>
        </tr>
        <tr>
          <th>
            2019<Trans>年</Trans>
          </th>
          <td>
            <Trans>九州北部豪雨</Trans>
          </td>
        </tr>
        <tr>
          <th></th>
          <td>
            <Trans>台風15号（千葉、神奈川）</Trans>
          </td>
        </tr>
        <tr>
          <th></th>
          <td>
            <Trans>台風17号（東日本・関東甲信越）</Trans>
          </td>
        </tr>
        <tr>
          <th>2020年</th>
          <td>
            <Trans>新型コロナウイルスの感染拡大</Trans>
          </td>
        </tr>
        <tr>
          <th>2022年</th>
          <td>
            <Trans>食料品を含む物価高騰</Trans>
          </td>
        </tr>
        <tr>
          <th></th>
          <td>
            <Trans>円安ドル高</Trans>
          </td>
        </tr>
      </table>
    </DisastersStyles>
  )
}

export default CenturyDisasterInTheWorld
