// material-ui
import { Container, Grid, Typography, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';

// ============================|| LANDING - KEY FEATURE PAGE ||============================ //

const relevant_publications = [
    {
        title: `"Learning to ask for conversational machine learning"`,
        content:
            'Shashank Srivastava, Igor Labutov, Tom Mitchell. Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing, EMNLP 2019.',
        pdf: 'https://aclanthology.org/D19-1426.pdf'
    },
    {
        title: `"Look-up and Adapt: A One-shot Semantic Parser"`,
        content:
            'Zhichu Lu, Forough Arabshahi, Igor Labutov, Tom Mitchell. Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing, EMNLP 2019.',
        pdf: 'https://arxiv.org/pdf/1910.12197.pdf'
    },
    {
        title: `"Learning Semantic Parsers from Natural Language Supervision"`,
        content:
            'Igor Labutov, Bishan Yang, and Tom Mitchell. Proceedings of the 2018 Conference on Empirical Methods in Natural Language Processing, EMNLP 2018.',
        pdf: 'https://aclanthology.org/D18-1195.pdf'
    },
    {
        title: `"Multi-Relational Question Answering from Narratives: Machine
        Reading and Reasoning in Simulated Worlds"`,
        content:
            'Igor Labutov, Bishan Yang, Anusha Prakash, and Amos Azaria. Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics, ACL 2018.',
        pdf: 'https://aclweb.org/anthology/P18-1077'
    },
    {
        title: `"Zero-shot Learning of Classifiers from Natural Language Quantification"`,
        content:
            'Shashank Srivastava, Igor Labutov, and Tom Mitchell. Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics, ACL 2018.',
        pdf: 'https://aclweb.org/anthology/P18-1029'
    },
    {
        title: `"Leveraging knowledge bases in LSTMs for improving machine reading."`,
        content:
            'Bishan Yang and Tom Mitchell. Proceedings of the 55th Annual Meeting of the Association for Computational Linguistics, ACL 2017.',
        pdf: 'https://aclanthology.org/P17-1132.pdf'
    },
    {
        title: `"A Joint Sequential and Relational Model for Frame-Semantic Parsing."`,
        content:
            'Bishan Yang and Tom Mitchell. Proceedings of the 2017 Conference on Empirical Methods in Natural Language Processing, EMNLP 2017.',
        pdf: 'https://aclanthology.org/D17-1128.pdf'
    },
    {
        title: `"End-to-End Learning for Structured Prediction Energy Networks."`,
        content:
            'David Belanger, Bishan Yang, and Andrew McCallum. Proceedings of the 34th International Conference on Machine Learning, ICML 2017.',
        pdf: 'https://arxiv.org/abs/1703.05667'
    },
    {
        title: `"Embedding entities and relations for learning and inference in knowledge bases."`,
        content:
            'Bishan Yang, Wen-tau Yih, Xiaodong He, Jianfeng Gao, and Li Deng. 3rd International Conference on Learning Representations, ICLR 2015.',
        pdf: 'https://arxiv.org/abs/1412.6575'
    }
];

const Publications = () => {
    return (
        <Container>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} lg={5} md={10}>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item xs={12}>
                            <Typography variant="h2" component="div">
                                Relevant Publications
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                {relevant_publications.map((item, idx) => (
                    <Grid item xs={12} key={idx}>
                        <Grid container justifyContent="center" spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <FadeInWhenVisible>
                                    <SubCard>
                                        <Grid container alignItems="center" spacing={2}>
                                            <Grid item xs zeroMinWidth>
                                                <Typography variant="h4">{item.title}</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="body2">{item.content} </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <MuiTypography
                                                    variant="body2"
                                                    color="primary"
                                                    component={Link}
                                                    href={item.pdf}
                                                    target="_blank"
                                                    display="block"
                                                    underline="hover"
                                                    gutterBottom
                                                >
                                                    View Publication
                                                </MuiTypography>
                                            </Grid>
                                        </Grid>
                                    </SubCard>
                                </FadeInWhenVisible>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Publications;
