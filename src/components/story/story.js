import './story.css'
import { scrollHook_getDynamicMarginYPosition } from '../util/scrollHooks';

const Story = () => {
    const scrollYBreak = 600;
    const titleHiddenTopMargin = 70;

    const getDynamicTopMargin = () => {
        return -1 * scrollHook_getDynamicMarginYPosition(scrollYBreak, titleHiddenTopMargin);
    }

    return (
        <div className='story-root' id='our-story'>
            <div className='story-text-title-div gold-underline'>
                <p className='story-text-title' style={{top: `${getDynamicTopMargin()}px`}}>Our Story</p>
            </div>
            <div className='story-text-content'>
                <p>Once upon a time, there was a little girl who lived in a village near the forest.  Whenever she went out, the little girl wore a red riding cloak, so everyone in the village called her Little Red Riding Hood.
                    One morning, Little Red Riding Hood asked her mother if she could go to visit her grandmother as it had been awhile since they'd seen each other.
                    "That's a good idea," her mother said.  So they packed a nice basket for Little Red Riding Hood to take to her grandmother.
                    When the basket was ready, the little girl put on her red cloak and kissed her mother goodbye.
                    "Remember, go straight to Grandma's house," her mother cautioned. "Don't dawdle along the way and please don't talk to strangers!  The woods are dangerous."
                    "Don't worry, mommy," said Little Red Riding Hood, "I'll be careful." But when Little Red Riding Hood noticed some lovely flowers in the woods, she forgot her promise to her mother.
                    She picked a few, watched the butterflies flit about for awhile, listened to the frogs croaking and then picked a few more.
                    Little Red Riding Hood was enjoying the warm summer day so much, that she didn't notice a dark shadow approaching out of the forest behind her...
                    Suddenly, the wolf appeared beside her. "What are you doing out here, little girl?" the wolf asked in a voice as friendly as he could muster.
                    "I'm on my way to see my Grandma who lives through the forest, near the brook,"  Little Red Riding Hood replied.
                    Then she realized how late she was and quickly excused herself, rushing down the path to her Grandma's house. </p>
            </div>
        </div>
    );
}

export default Story;