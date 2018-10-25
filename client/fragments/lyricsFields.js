import gql from 'graphql-tag';

export default gql`
    fragment lyricsFields on SongType {
        lyrics {
             id
             content
             likes
        }
    }
`;
