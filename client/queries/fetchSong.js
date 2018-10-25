import gql from 'graphql-tag';
import lyricsFields from '../fragments/lyricsFields';

export default gql`
    query SongQuery($id: ID!) {
        song(id: $id) {
            id
            title
            ...lyricsFields
        }
    }
    ${lyricsFields}
`;
