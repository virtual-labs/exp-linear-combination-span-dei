This experiment is designed to help students understand the concept of span, a fundamental idea in linear algebra. The span of a set of vectors refers to all linear combinations of those vectors and forms a subspace of the vector space and. This idea is important because it helps us understand the notion of a basis. By doing this experiment, students will be able to visualize the span of subsets of <i>R</i><sup>2</sup>  and can extend this idea to other dimensions. Here <i>V</i> be a vector space over <i>F</i>≡<i>R</i> or <i>C</i> and let <i>S</i> be a subset of <i>V</i>.
### 1. Linear combination:
Let <i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>, …, <i>x</i><sub><i>k</i></sub> &isin; <i>V</i> and <i>α</i><sub>1</sub>, <i>α</i><sub>2</sub>, ..., <i>α</i><sub><i>k</i></sub> &isin; F. Then <i>α</i><sub>1</sub><i>x</i><sub>1</sub>+<i>α</i><sub>2</sub><i>x</i><sub>2</sub>+ …+<i>α</i><sub><i>k</i></sub><i>x</i><sub><i>k</i></sub> is called a linear combination of <i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>, …, <i>x</i><sub>k</sub>. 
### 2. Example:
Consider the vector spaces <i>R</i><sup>2</sup> over <i>R</i>
   
Then some linear combinations of (3, 0), (1, 4)&isin;<i>R</i><sup>2</sup> are given below: <br>
Case (i) <i>α</i><sub>1</sub>=2&isin;<i>R</i>, <i>α</i><sub>2</sub>=1&isin;<i>R</i> <br>
<i>α</i><sub>1</sub><i>x</i><sub>1</sub>+<i>α</i><sub>2</sub><i>x</i><sub>2</sub>= 2(3, 0) +1(1, 4) =(6, 0)+(1, 4)=(7, 4)

Case (ii) <i>α</i><sub>1</sub>=1&isin;<i>R</i>, <i>α</i><sub>2</sub>=0&isin;<i>R</i> <br>
<i>α</i><sub>1</sub><i>x</i><sub>1</sub>+<i>α</i><sub>2</sub><i>x</i><sub>2</sub>= 1(3, 0) + 0(1, 4) = (3, 0)+(0, 0) = (3, 0)

Case (iii) <i>α</i><sub>1</sub>=0&isin;<i>R</i>, <i>α</i><sub>2</sub>=1&isin;<i>R</i> <br>
<i>α</i><sub>1</sub><i>x</i><sub>1</sub>+<i>α</i><sub>2</sub><i>x</i><sub>2</sub>= 0(3, 0)+1(1, 4)=(0, 0)+(1, 4)=(1, 4)

Case (iv) <i>α</i><sub>1</sub>=-2&isin;<i>R</i>, <i>α</i><sub>2</sub>=√2&isin;<i>R</i> <br>
<i>α</i><sub>1</sub><i>x</i><sub>1</sub>+<i>α</i><sub>2</sub><i>x</i><sub>2</sub>= -2(3, 0)+ √2(1, 4)=(-6, 0)+(√2, 4√2)=(√2-6, 4√2)
### 3. Example:
Consider the vector space (<i>P</i><sub>2</sub> (x), +, .) over <i>R</i> denoted by <i>P</i><sub>2</sub>(<i>x</i>)  where <i>P</i><sub>2</sub>(<i>x</i>)={ <i>a</i><sub>2</sub><i>x</i><sup>2</sup>+<i>a</i><sub>1</sub><i>x</i><sup>1</sup>+<i>a</i><sub>0</sub>, where <i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, <i>a</i><sub>0</sub> &isin;<i>R</i> }.

The operation addition is defined as (<i>a</i><sub>2</sub><i>x</i><sup>2</sup>+<i>a</i><sub>1</sub><i>x</i><sup>1</sup>+<i>a</i><sub>0</sub>)+(<i>b</i><sub>2</sub><i>x</i><sup>2</sup>+<i>b</i><sub>1</sub><i>x</i><sup>1</sup>+<i>b</i><sub>0</sub>)={(<i>a</i><sub>2</sub>+<i>b</i><sub>2</sub>)<i>x</i><sup>2</sup>+(<i>a</i><sub>1</sub>+<i>b</i><sub>1</sub>)<i>x</i><sup>1</sup>+(<i>a</i><sub>0</sub>+<i>b</i><sub>0</sub>)}; <br> where <i>a</i><sub>0</sub>, <i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, <i>b</i><sub>0</sub>, <i>b</i><sub>1</sub>, <i>b</i><sub>2</sub>&isin;<i>R</i>

And the operation scalar multiplication is defined as <i>α</i>.(<i>a</i><sub>2</sub><i>x</i><sup>2</sup>+<i>a</i><sub>1</sub><i>x</i><sup>1</sup>+<i>a</i><sub>0</sub>)=<i>α</i>.<i>a</i><sub>2</sub><i>x</i><sup>2</sup>+ <i>α</i>.<i>a</i><sub>1</sub><i>x</i><sup>1</sup>+ <i>α</i>.<i>a</i><sub>0</sub>&isin;<i>R</i>

Then <i>x</i><sup>2</sup>+3<i>x</i>+3 &isin;<i>P</i><sub>2</sub>(<i>x</i>) is a linear combination of <i>p</i><sub>1</sub>=<i>x</i>+1, <i>p</i><sub>2</sub>=<i>x</i><sup>2</sup>+<i>x</i>+1, for <i>α</i><sub>1</sub>=2&isin;<i>R</i>, <i>α</i><sub>2</sub>=1&isin;<i>R</i>, s.t. 
<i>α<i><sub>1</sub><i>p</i><sub>1</sub>+<i>α</i><sub>2</sub><i>p</i><sub>2</sub>=2(<i>x</i>+1)+1(<i>x</i><sup>2</sup>+<i>x</i>+1)=(2<i>x</i>+2)+ (<i>x</i><sup>2</sup>+<i>x</i>+1)=<i>x</i><sup>2</sup>+3<i>x</i>+3
### 4. Linear span:
Case (i) Let φ &ne; <i>S</i> &sube; <i>V</i>. Then the linear span of <i>S</i> consists of all possible linear combinations of elements of <i>S</i>.  It is denoted by <i>L</i>(<i>S</i>). Thus <i>L</i>(<i>S</i>)= { <i>α</i><sub>1</sub><i>x</i><sub>1</sub>+ <i>α</i><sub>2</sub><i>x</i><sub>2</sub>+ …+<i>α</i><sub><i>k</i></sub><i>x</i><sub>k</sub> : <i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>, ..., <i>x</i><sub><i>k</i></sub> &isin;<i>V</i>, <i>α</i><sub>1</sub>, <i>α</i><sub>2</sub>, …, <i>α</i><sub><i>k</i></sub> &isin;<i>F</i>}.

![Linear span](images/exp3newimage1.PNG "Linear span")<br>
Case (ii) If <i>S</i>= φ, <i>L</i>(<i>S</i>) is defined to be {0}.
### 5. Spanning set:
If <i>L</i>(<i>S</i>)=<i>V</i>, that is if <i>V</i> is the linear span of <i>S</i> then, <i>S</i> is called a spanning set of <i>V</i> and it is said that <i>S</i> spans <i>V</i>.
![Linear span](images/exp3newimage2.PNG "Linear span")<br>
### 6. Example-I:
Let <i>R</i><sup>2</sup> be the vector space over <i>R</i> where <i>S</i> &sube; <i>R</i><sup>2</sup>. Then

(i)	<i>S</i>={(1, 0)} does not span <i>R</i><sup>2</sup>, i.e. <i>L</i>(<i>S</i>) &ne; <i>R</i><sup>2</sup>
Justification: By definition, <i>L</i>(<i>S</i>)={<i>x</i>(1, 0)|<i>x</i>&isin;<i>R</i>}={(<i>x</i>, 0)|<i>x</i>&isin;<i>R</i>}. We show that (1, 1)  &notin;  <i>L</i>(<i>S</i>) because if not, then (1, 1) &isin; <i>L</i>(<i>S</i>) which implies (1, 1)=<i>α</i>(<i>x</i>, 0)=(<i>αx</i>, 0) i.e. 1=0, a contradiction. Thus (1, 1) &notin; <i>L</i>(<i>S</i>). Hence <i>L</i>(<i>S</i>) &ne; <i>R</i><sup>2</sup>. In the adjoining figure (Fig. 1) red line represents the span of <i>S</i>.

![Example-I](images/exp3.2.PNG "Examples-I")<br>
<b>Fig. 1: <i>L</i>(<i>S</i>)=Red line</b><br>

(ii)	<i>S</i>={(1, 1), (1, 0)} spans <i>R</i><sup>2</sup>, i.e. <i>S</i> is a spanning set of <i>R</i><sup>2</sup>, i.e. <i>L</i>(<i>S</i>)=<i>R</i><sup>2</sup>.
Justification: By definition, <i>L</i>(<i>S</i>)={<i>x</i>(1, 0)+<i>y</i>(1, 1)|<i>x</i>, <i>y</i>  &isin;<i>R</i>}={(<i>x</i>, 0)+(<i>y</i>, <i>y</i>)|<i>x</i>, <i>y</i> &isin;<i>R</i>}={(<i>x</i>+<i>y</i>, <i>y</i>)|<i>x</i>, <i>y</i> &isin;<i>R</i>}.
Clearly <i>L</i>(<i>S</i>) &sube; <i>R</i><sup>2</sup>. We show that <i>R</i><sup>2</sup> &sube; <i>L</i>(<i>S</i>). Let (<i>a</i>, <i>b</i>)  &isin;<i>R</i><sup>2</sup>. Then (<i>a</i>, <i>b</i>)=<i>α</i>(1, 0)+<i>β</i>(1, 1) for some <i>α</i>, <i>β</i> &isin;<i>R</i>. Therefore <i>α</i>=<i>a</i>-<i>b</i> and <i>β</i>=<i>b</i>. Clearly <i>α</i>(1, 0)+<i>β</i>(1, 1)=(<i>a</i>, <i>b</i>). Thus (<i>a</i>, <i>b</i>) &isin;<i>L</i>(<i>S</i>). So that <i>R</i><sup>2</sup> &sube;<i>L</i>(<i>S</i>). Hence <i>L</i>(<i>S</i>)=<i>R</i><sup>2</sup>. In the adjoining figure (Fig. 2) portion shaded by red lines represents the span of <i>S</i> which equals to <i>R</i><sup>2</sup> as (1, 0) is off the blue line spanned by (1, 1).

![Example-I](images/exp3.1.PNG "Examples-I")<br>
<b>Fig. 2: <i>L</i>(<i>S</i>)=Portion shaded by red lines=<i>R</i><sup>2</sup></b><br>

(iii)	<i>S</i>={(1, 0), (2, 0)} does not span <i>R</i><sup>2</sup> i.e. <i>L</i>(<i>S</i>) &ne; <i>R</i><sup>2</sup>.
Justification: By definition, <i>L</i>(<i>S</i>)={<i>x</i>(1, 0)+<i>y</i>(2, 0)|<i>x</i>, <i>y</i> &isin;<i>R</i>}={(<i>x</i>, 0)+(2<i>y</i>, 0)|<i>x</i>, <i>y</i> &isin;<i>R</i>}={(<i>x</i>+2<i>y</i>, 0)|<i>x</i>, <i>y</i>&isin;<i>R</i>}.
We show that (0, 1)  &notin; <i>L</i>(<i>S</i>). For if (0, 1)&isin;<i>L</i>(<i>S</i>), then (0, 1)=<i>α</i>(1, 0)+<i>β</i>(2, 0) for some <i>α</i>, β &isin; R. Therefore 1=0, a contradiction. Thus (0, 1) &notin; <i>L</i>(<i>S</i>). Hence <i>L</i>(<i>S</i>) &ne; R<sup>2</sup>

### 7. Example-II: 
i. Consider the vector space P<sub>2</sub>x  over R and let S={1, x+1, x<sup>2</sup>+x+1} &sube; P<sub>2</sub>x . Then S spans P<sub>2</sub>x , i.e. <i>L</i>(<i>S</i>)=P<sub>2</sub>x .

Justification: By definition, <i>L</i>(<i>S</i>)={α.1+β(x+1)+γ(x<sup>2</sup>+x+1): α, β, γ  &isin; R}. Clearly <i>L</i>(<i>S</i>)  &sube;  P<sub>2</sub>x . To prove that P<sub>2</sub>x  &sube; <i>L</i>(<i>S</i>). Let a2x<sup>2</sup>+a<sub>1</sub>x<sup>1</sup>+a<sub>0</sub>  &isin; P<sub>2</sub>x , where a<sub>0</sub>, a<sub>1</sub>, a<sub>2</sub> &isin; R. Then a<sub>2</sub>x<sup>2</sup>+a<sub>1</sub>x<sup>1</sup>+a<sub>0</sub>= α.1+β(x+1)+γ(x<sup>2</sup>+x+1) for some α, β, γ  &isin; R. Therefore α=a<sub>0</sub>-a<sub>1</sub>, β=a<sub>1</sub>-a<sub>2</sub> and γ=a<sub>2</sub>.
Clearly, α.1+β(x+1)+γ(x<sup>2</sup>+x+1)= a<sub>2</sub>x<sup>2</sup>+a<sub>1</sub>x<sup>1</sup>+a<sub>0</sub>. Thus a<sub>2</sub>x<sup>2</sup>+a<sub>1</sub>x<sup>1</sup>+a<sub>0</sub> &isin; <i>L</i>(<i>S</i>), so that P<sub>2</sub>x  &sube; <i>L</i>(<i>S</i>). Hence <i>L</i>(<i>S</i>)= P<sub>2</sub>x .

ii. Consider the vector space P<sub>2</sub>x  over R and let
S={ x+1, x<sup>2</sup>+1, x-x<sup>2</sup>} &sube; P<sub>2</sub>x . Then S does not span P<sub>2</sub>x , i.e. <i>L</i>(<i>S</i>)  &ne; P<sub>2</sub>x .
Justification: By definition, <i>L</i>(<i>S</i>)={α(x+1)+β(x<sup>2</sup>+1)+γ(x-x<sup>2</sup>): α, β, γ  &isin; R}.We  show that 1 &notin;  <i>L</i>(<i>S</i>) because if not, then 1 &isin;<i>L</i>(<i>S</i>). Thus 1=α(x+1)+β(x<sup>2</sup>+1)+γ(x-x<sup>2</sup>) for some α, β, γ  &isin; R. Therefore α+β=1, α+γ=0, β-γ=0. By solving these equations, we get α+β=1and α+β=0, a contradiction. Thus 1 &notin;  <i>L</i>(<i>S</i>). Hence <i>L</i>(<i>S</i>)  &ne; P<sub>2</sub>x .

### 8. Properties:
(i) S is a subset of <i>L</i>(<i>S</i>).

(ii) <i>L</i>(<i>S</i>) is the smallest subspace of V containing S. Thus the smallest subspace of V containing φ is {0}.

(iii) Let A &sube; B &sube; V. Then L(A) &sube; L(B).
### 9. Summary:
For φ&ne;S&sube;V, α<sub>1</sub>x<sub>1</sub>+ α<sub>2</sub>x<sub>2</sub>+…+α<sub>k</sub>x<sub>k</sub> is a linear combination of elements of S, where x<sub>1</sub>, x<sub>2</sub>, …, x<sub>k</sub>&isin;S and α<sub>1</sub>, α<sub>2</sub>, ..., α<sub>k</sub>&isin;F: <i>L</i>(<i>S</i>) is the collection of all possible linear combinations of S. If S=φ, then L(S) is defined to be {0}. If <i>L</i>(<i>S</i>)=V, then S is called a spanning set of V and S is said to span V.

It may be noted that <i>L</i>(<i>S</i>)&ne;φ, S&sube;<i>L</i>(<i>S</i>) and <i>L</i>(<i>S</i>) is a subspace of V. Moreover, if W is a subspace of V such that S&sube;W, then L(S)&sube;W. In other words, <i>L</i>(<i>S</i>) is the smallest subspace of V containing S. A vector space V can have more than one spanning sets. For example, if we consider the vector space R<sup>2</sup> over R, then both of {(1, 0), (0, 1), (2, 2)} and {(1, 2), (2, 3)} are its spanning sets. Indeed, one can construct infinitely many of its spanning sets.

