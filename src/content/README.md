# Emotions as the Secret Architects of Cinema

What makes a film stick in our minds long after the credits roll? Is it the plot twists, the unforgettable characters, or something deeper—something more visceral? At the heart of every great movie lies an emotional blueprint: joy, sadness, fear, anger, surprise, disgust, and even moments of calm neutrality. These emotions shape the stories we tell and how we experience them.

In this datastory, we’re pulling back the curtain to reveal how emotions drive the magic of movies. Why do comedies leave us glowing with joy while horror films send shivers down our spines? How have these emotional tones shifted over time and across genres? Can the emotions of a film predict its cast, language, or even its audience ratings?

## The Heart of Our Story: The Data Behind the Emotions

Before starting our journey we need a foundation to build on. Therefore We are using the CMU Movie Summary Corpus (//CITE Learning Latent Personas of Film Characters
David Bamman, Brendan O'Connor, and Noah A. Smith
ACL 2013, Sofia, Bulgaria, August 2013). We got

- Metadata for 81 741 movies like name, languages and genre
- Metadata for 450 669 characters aligned in these movies like age, name and gender
- Plot summaries for 42 306 movies extracted from the English-language Wikipedia

Emotions can be complex and challenging to define, so we focused on Ekman’s six core emotions — joy, sadness, anger, fear, surprise, and disgust — along with a neutral emotion for balance (https://www.paulekman.com). To identify these emotions in our movie data we performed natural language processing with the pretrained `j-hartmann/emotion-english-distilroberta-base` model (Jochen Hartmann, "Emotion English DistilRoBERTa-base". https://huggingface.co/j-hartmann/emotion-english-distilroberta-base/, 2022.
). The model outputs a probability distribution over the emotions, where the probabilities sum to one. Each emotion is assigned a value between 0 and 1, representing the intensity with which that emotion is reflected in the movie plot summary.

Now that we have the main actors of our story - the emotions - lets see what role each of them plays:
![emotion_distribution_pie_chart_no_bg](https://hackmd.io/_uploads/HJ_NT-zHJg.png)

We can see that the emotions are not evenly distributed across our data: neutral, anger, and disgust are more dominant, while surprise and joy are less prevalent. Nevertheless, all emotions are significantly represented, so lets start our journey in the emotional landscapes in cinema.

We have seen that not all of our stars get the same attention across our movies. But this could also be due to an imbalance in genres and which emotions are used in them. So the question arises

## What are the predominant emotional tones used in films and how do they vary across different movie genres?

Our data contains hundreds of very fine-grained genres which makes it hard to do a meaningful analysis. Therefore we chose to only use genres with more than 2000 corresponding movies. Different genres are associated with different emotions: Horror movies are disgusting and comedy movies spark joy. But is this really the case? Lets have a look
![heatmap_with_transparent_bg](https://hackmd.io/_uploads/B1g-hGfryg.png)

Interesting, we can see that certain genre have overall stronger emotions than others. Some values are expected such as the high value of fear in Horror or the high value of anger in Action but others are surprising for example the relatively high value of anger in Family Film. The imbalance between emotions we saw earlier is displayed as well where surprise and joy have very low values across all genres. This is surprising, especially in genres like Family Film or Comedy but also shows that these emotions seem not to be as strong as for example anger which has high values across all genres.

So we saw that the intensity of different emotions varies across genres which is not breaking news. But it is in the nature of emotions to change fluently all the time. There may be good times there may be bad times. In some cultures it is rude to show sadness in others to show joy. So

## Emotions and Statistics: Building the Framework of Film Genres

If emotions are the architects of cinema, statistics is the ruler ensuring precision and balance in their construction. Our analysis dives deep into the emotional foundation of movies, answering the question: What are the predominant tones used in films, and how do they vary across the most popular genres?

### Identifing Popular Genres

We began by identifying the most popular genres based on the number of movies produced. Narrowing our scope to genres with over 2,000 movies ensured statistical robustness. These genres provide a rich tapestry of storytelling, each weaving its unique emotional signature.

### Emotional Profiles by Genre

To determine the emotional blueprint of each genre, we calculated the average emotional tone. Recognizing the potential for imbalances, we employed t-tests to isolate emotions significantly above the global average for each genre. This approach revealed the standout emotions defining genres like comedy, drama, action, and horror.

![disgust_scores](https://hackmd.io/_uploads/SJSDxLMryx.png)
![anger_scores](https://hackmd.io/_uploads/HJKdxIzHkx.png)

![Horror_significant_emotions](https://hackmd.io/_uploads/S1H9lLzBkl.png)
![Comedy_significant_emotions](https://hackmd.io/_uploads/S1o5l8fSyl.png)

### Evolution of Emotions Over Time

To explore how these emotions have evolved, we conducted time series analyses for each prominent emotion within the selected genres. Patterns emerged, showing the rise and fall of emotional tones across decades. For instance, fear in horror films has steadily increased, while joy in comedies experienced notable peaks during certain cultural eras.

![emotions_over_years](https://hackmd.io/_uploads/ry7U-8zHyx.png)

### Forecasting the Future with ARIMA

Finally, we applied ARIMA models to forecast emotional trends over the next ten years. These projections offer insights into the future trajectory of storytelling: will action movies become darker? Will dramas continue to balance sadness with hope? Only time will tell, but our models provide a glimpse into cinema’s emotional future.

![Romance Film_joy_forecast](https://hackmd.io/_uploads/BJlbH8fSye.png)
![Romance Film_sadness_forecast](https://hackmd.io/_uploads/rJhZH8GSkg.png)

![Romance Films_joy_acf_pacf](https://hackmd.io/_uploads/B147BIMHyg.png)
![Romance Films_sadness_acf_pacf](https://hackmd.io/_uploads/BkkNBUzHJe.png)

## How has the emotional tone of films evolved over time within each genre?

### Emotions across time and space

//First two plots from results

### Back to the Future: Time Series of Emotions

// Two or three plots for time series

Ok now we know the emotional tones in movies in the future. But what about the here and now? What impact have the emotional tones in movies on the underlying components? We will explore how emotions in movies - as secret architects - shape the attributes of these movies. Lets dive into the first act:

## How does the emotional tone of films influence the selection of actor traits, such as age and gender?

To find an answer to this question we will use the all-time classic of statistics: Linear regression with Ordinary Least Squares. We want to explore how different emotions influence attributes of the cast of a movie: What is the average age of the involved actors? Is there a difference in the proportion of male and female actors across the emotions? To obtain a meaningful analysis we have to be careful! The emotion scores add up to one so there is severe multicolinarity. Therefore we will drop the neutral emotion because it is the least interesting one for this analysis. Therefore our regression results present the impact of an increase of the emotional tones relative to the neutral emotion, which is exactly what we are searching for.

First let's look at the average age across the movies. Can Harison Ford still play the main role in an action movie? Could a Grandpa also play the main role in Home alone? We will find out.

![coefficient_plot](https://hackmd.io/_uploads/ryv4ihzHke.png)

Interesting, all coefficient are negative! We have to be careful by interpreting these results because we have to be sure that they are significant. Good that this is included in our analysis:

| Emotion  | Coefficient | Std. Error | P-Value | Impact Direction |
| -------- | ----------- | ---------- | ------- | ---------------- |
| Disgust  | -1.2892     | 0.244      | <0.001  | Negative         |
| Fear     | -0.0451     | 0.224      | 0.841   | Neutral          |
| Anger    | -0.8065     | 0.226      | <0.001  | Negative         |
| Sadness  | -1.5702     | 0.228      | <0.001  | Negative         |
| Surprise | -0.7737     | 0.377      | 0.040   | Negative         |
| Joy      | -2.1611     | 0.395      | <0.001  | Negative         |

Nice, all coefficients except fear, are significant predictors! So we can see that in general more emotional movies on average include younger actors. This is especially significant for movies where sadness, joy and disgust are dominant. This makes sense, as in movies where joy and sadness are dominant emotions often Kids are involved which decreases the average age of the cast. Disgust is a surprise because as seen above it is strongest in genres like Horror or Crime Fiction where one might expect older actors. This is good to know, if we want to create a movie where disgust plays a dominant role we should - against intuition - involve younger actors as well!

But these results could also be confounded by another variable: The proportion of female and male actors in movies. Are there just more female actors in joyfull movies which then tend to be younger? Our analysis covers this as well, we encoded male actors with zero and female actors with one to calculate the average gender for a movie. So higher values represent a higher proportion of female actors while lower values represent a higher proportion of male actors.

![gender_coefficient_plot](https://hackmd.io/_uploads/BkMIUTfB1e.png)

Wow, emotions - except anger - seem to increase the proportion of female actors! Again we first have to check the significance of our predictors before jumping to conclusions:

| Emotion  | Coefficient | Std. Error | P-Value | Impact Direction |
| -------- | ----------- | ---------- | ------- | ---------------- |
| Disgust  | 0.0460      | 0.008      | <0.001  | Positive         |
| Fear     | 0.0306      | 0.007      | <0.001  | Positive         |
| Anger    | -0.0293     | 0.007      | <0.001  | Negative         |
| Sadness  | 0.1069      | 0.007      | <0.001  | Positive         |
| Surprise | 0.0828      | 0.012      | <0.001  | Positive         |
| Joy      | 0.1244      | 0.013      | <0.001  | Positive         |

Perfect all emotions are significant predictors! We can see that stronger emotions tend to increase the proportion of female actors in movies. This trend is the strongest for joy and sadness which corresponds with our age analysis: Joy and sadness increase the proportion of female actors in movies and decrease the average age, indicating that female actors tend to be younger than male actors. But there is one exception: Anger 😡. It seems that in movies where anger is a strong emotion the proportion of female actors decreases. So female actors should think twice if they want to put the effort into a casting for a movie where anger is a dominant emotion. On the other hand directors should ask themselves why they are casting like this and if male actors are actually better suited for such movies or if this is a cliché to overcome.

Great, we gained knowledge on the role of emotions on the cast for a movie. We have seen that stronger emotions in general tend to decrease the average age of actors and increase the proportion of female actors indicating that a balanced, younger cast can create stronger emotions. The outlier in the anger emotion shows that there are maybe still some clichés to overcome or that male dominant movies just overall tend to have more anger in them. After having a detailed look at the actor level lets go one step above and look at the cultural level which in our data is represented by languages. Lets jump into the final act of our regression play:

## Does the emotional tone of films differ between movies in different languages?

To explore this question we will first have a look which languages are included in our data:

![language_distribution_pie_chart](https://hackmd.io/_uploads/SyhrzRMByg.png)

## Can films be clustered based on their emotional tone, and do these clusters reveal distinct patterns in consumer ratings?

Let’s set the stage. Our dataset consists of movies, each tagged with a unique “emotional signature”: a combination of basic emotions—joy, sadness, fear, surprise, anger, disgust, and more—whose values always sum to one, like ingredients of a secret cinematic recipe. On top of this, we have consumer ratings, that almighty number that can make or break a film’s reputation.

[Emotions density plot]

We we notice that emotions run the scale. Some films lean heavily into one emotion and some others rely one multiple emotions.

[Ratings distribution plot]

Ratings, of course, vary widely with a mean of 3.05 and a standard deviation of 0.8. Could there be a pattern linking the emotional tone of a film to how much people love or hate it?

### The Classic Clustering Approach

We begin with a time-honored technique: k-means clustering. Using a straightforward distance metric (cosine similarity to align to our data) to group films by their emotional tone, we find that the algorithm sorts them into neat clusters , where the optimal numbe rof clusters matches the number of emotions and therefore, each dominated by single emotions. One cluster might be primarily “joy” films, another “fear,” another “anger,” and so on.

At first glance, this seems like the ideal setup. We can identify which single-emotion groups correlate to higher or lower ratings. Maybe films bursting with joy and a sprinkle of surprise consistently score higher? Maybe fear-driven horror flicks fare poorly? But unfortunately, the average ratings of each cluster dont deviate noticeable from the global mean of movie ratings. This is not that surpriseing considering how generalized teh clusters are (only 7 clusters) and each cluster averaging over a large number of movies

### A More Nuanced Lens: DBSCAN and the Shape of Emotional Space

We know that our emotional data has a special structure: all emotion values sum to one, placing every movie’s emotional signature on a simplex—think of it like points scattered across the surface of a triangular landscape. Classic clustering methods struggle to follow the subtle curves and folds of this shape.

Enter DBSCAN, a clustering algorithm that excels at finding irregularly shaped groups without forcing them into spherical molds. DBSCAN scans through our emotional galaxy and discovers clusters of movies that share not just one dominant emotion, but combination of emotions like a dash of surprise mixed with a hint of sadness.
These clusters are more fine-grained and carry secrets that the straightforward k-means approach missed. Now we can pinpoint clusters that differ significantly from the global average rating.

### Revealing Patterns: Winners and Losers in the Emotional Landscape

Let’s highlight two extreme examples that DBSCAN consistently uncovered:

#### The Horror Cluster of Despair:

Across multiple DBSCAN configurations, clusters dominated by “fear” with a side of “sadness” and a pinch of “surprise” emerged as low-performing clusters. These poor horror movies—masterpieces received way lower ratings on average (about one standard deviation below the average). It’s as if the audience said: We appreciate the adrenaline, but this grim emotional cocktail leaves a sour aftertaste or more likely it is one of the well known trash horrormovies that lack of profile (e.g. too less surprise, too predictable).

Additional to these grim emotional profiles, we found a subset of films that scored particularily low, characterized by a high level of disgust combined with just a hint of fear. This combination likewise fared poorly, suggesting that viewers react negatively to a stale stew of revolting elements and dread without the complexity needed to keep them truly on edge.

#### The Uplifting Surprise-Sadness Fusion:

On the brighter side, we discovered clusters defined not by a single emotion, but by unusual yet harmonious blends like “surprise” coupled with “sadness,” or films where “neutral” and “joy” swirl together. Odd as it sounds, viewers seemed to reward complexity and contrast. Films that evoked not just one emotion, but two seemingly disparate feelings, often scored well above average. Perhaps there’s something about these nuanced emotional journeys that resonates with audiences, leaving them more satisfied, more engaged, like in the case of the combination “surprise” and “sadness” leaving the audience with their own thoughts after an emotional war movie.
Intriguingly, we also uncovered another winning recipe: high disgust intertwined with a bit of anger, a dash of neutral, and a hint of sadness—but crucially, without fear. This unconventional mix managed to score impressively high, perhaps because it offers emotional complexity without relying on the all-too-familiar jump-scare formula.

#### A Glimmer of Hope for Horror

It isn’t all doom and gloom for the fearful movies. Another intriguing pattern popped up: clusters that combined “fear” and “disgust” in similar measure scored either very poorly or surprisingly well. This duality suggests that while some viewers run screaming from such films (both literally and figuratively), others—perhaps genre enthusiasts or thrill-seekers—reward the courage it takes to dive into the darkest emotional corners.

In other words, it’s not just the emotion itself, but how it’s paired. A delicate balancing act of fear and disgust might repel a casual viewer but enthrall a niche audience, resulting in polarized ratings. The takeaway? For horror producers, it pays to know your audience and craft the emotional experience just right.

## Conclusion

Can films be clustered based on their emotional tone, and do these clusters reveal distinct patterns in consumer ratings? The answer is both yes and no. While our initial k-means approach indicated that no single emotion stood out as consistently leading to higher or lower ratings, more nuanced clusters discovered using DBSCAN offered deeper insights. These finer-grained clusters showed that certain specific combinations of emotions—though represented by only a small portion of the entire dataset—can indeed correlate with significantly higher or lower ratings than the average. However, these findings should be interpreted with caution since the number of movies in each such cluster is limited, and the results are sensitive to the clustering configuration used. In other words, we’ve uncovered intriguing patterns, but the subtlety and sparsity of the data remind us to treat these conclusions carefully.
