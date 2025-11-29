This experiment is designed to help students understand the concept of span, a fundamental idea in linear algebra. The span of a set of vectors refers to all linear combinations of those vectors and forms a subspace of the vector space and. This idea is important because it helps us understand the notion of a basis. By doing this experiment, students will be able to visualize the span of subsets of R<sup>2</sup> and can extend this idea to other dimensions. Here V be a vector space over F≡R or C and let S be a subset of V.
### 1. Linear combination:
Let x<sub>1</sub>, x<sub>2</sub>, …, x<sub>k</sub> &isin; V and α<sub>1</sub>, α<sub>2</sub>, ..., α<sub>k</sub> &isin; F. Then α<sub>1</sub>x<sub>1</sub>+ α<sub>2</sub>x<sub>2</sub>+…+ α<sub>k</sub>x<sub>k</sub> is called a linear combination of x<sub>1</sub>, x<sub>2</sub>, …, x<sub>k</sub>. 
### 2. Example:
Consider the vector spaces R<sup>2</sup> over R
   
Then some linear combinations of (3, 0), (1, 4)&isin;R<sup>2</sup> are given below: <br>
Case (i) α<sub>1</sub>=2&isin;R, α<sub>2</sub>=1&isin;R <br>
α<sub>1</sub>x<sub>1</sub>+α<sub>2</sub>x<sub>2</sub>= 2(3, 0) +1(1, 4) =(6, 0)+(1, 4)=(7, 4)

Case (ii) α<sub>1</sub>=1&isin;R, α<sub>2</sub>=0&isin;R <br>
α<sub>1</sub>x<sub>1</sub>+α<sub>2</sub>x<sub>2</sub>= 1(3, 0) + 0(1, 4) = (3, 0)+(0, 0) = (3, 0)

Case (iii) α<sub>1</sub>=0&isin;R, α<sub>2</sub>=1&isin;R <br>
α<sub>1</sub>x<sub>1</sub>+α<sub>2</sub>x<sub>2</sub>= 0(3, 0)+1(1, 4)=(0, 0)+(1, 4)=(1, 4)

Case (iv) α<sub>1</sub>=-2&isin;R, α<sub>2</sub>=√2&isin;R <br>
α<sub>1</sub>x<sub>1</sub>+α<sub>2</sub>x<sub>2</sub>= -2(3, 0)+ √2(1, 4)=(-6, 0)+(√2, 4√2)=(√2-6, 4√2) 
### 3. Example:
Consider the vector space (P<sub>2</sub> (x), +, .) over R denoted by P<sub>2</sub> (x)  where P<sub>2</sub> (x)={ a<sub>2</sub>x<sup>2</sup>+a<sub>1</sub>x<sup>1</sup>+a<sub>0</sub>, where a<sub>1</sub>, a<sub>2</sub>, a<sub>0</sub> &isin; R }.

The operation addition is defined as (a<sub>2</sub>x<sup>2</sup>+a<sub>1</sub>x<sup>1</sup>+a<sub>0</sub>)+(b<sub>2</sub>x<sup>2</sup>+b<sub>1</sub>x<sup>1</sup>+b<sub>0</sub>)={(a<sub>2</sub>+b<sub>2</sub>)x<sup>2</sup>+(a<sub>1</sub>+b<sub>1</sub>)x<sup>1</sup>+(a<sub>0</sub>+b<sub>0</sub>)}; <br> where a<sub>0</sub>, a<sub>1</sub>, a<sub>2</sub>, b<sub>0</sub>, b<sub>1</sub>, b<sub>2</sub>&isin;R

And the operation scalar multiplication is defined as α.(a<sub>2</sub>x<sup>2</sup>+a<sub>1</sub>x<sup>1</sup>+a<sub>0</sub>)=α.a<sub>2</sub>x<sup>2</sup>+ α.a<sub>1</sub>x<sup>1</sup>+ α.a<sub>0</sub>&isin;R

Then x<sup>2</sup>+3x+3 &isin; P<sub>2</sub> (x) is a linear combination of p<sub>1</sub>=x+1, p<sub>2</sub>=x<sup>2</sup>+x+1, for α<sub>1</sub>=2&isin;R, α<sub>2</sub>=1&isin;R, s.t. 
α<sub>1</sub>p<sub>1</sub>+α<sub>2</sub>p<sub>2</sub>=2(x+1)+1(x<sup>2</sup>+x+1)=(2x+2)+ (x<sup>2</sup>+x+1)=x<sup>2</sup>+3x+3
### 4. Linear span:
Case (i) Let φ &ne; S &sube; V. Then the linear span of S consists of all possible linear combinations of elements of S.  It is denoted by L(S). Thus L(S)= { α<sub>1</sub>x<sub>1</sub>+ α<sub>2</sub>x<sub>2</sub>+ …+α<sub>k</sub>x<sub>k</sub> : x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>k</sub> &isin; V, α<sub>1</sub>, α<sub>2</sub>, …, α<sub>k</sub> &isin; F}.

![Linear span](images/exp3newimage1.PNG "Linear span")<br>
Case (ii) If S= φ, L(S) is defined to be {0}.
### 5. Spanning set:
If L(S)=V, that is if V is the linear span of S then, S is called a spanning set of V and it is said that S spans V.
![Linear span](images/exp3newimage2.PNG "Linear span")<br>
### 6. Example-I:
Let R<sup>2</sup> be the vector space over R where S &sube; R<sup>2</sup>. Then

(i)	S={(1, 0)} does not span R<sup>2</sup>, i.e. L(S) &ne; R<sup>2</sup>
Justification: By definition, L(S)={x(1, 0)|x &isin; R}={(x, 0)|x &isin; R}. We show that (1, 1)  &notin;  L(S) because if not, then (1, 1) &isin; L(S) which implies (1, 1)=α(x, 0)=(αx, 0) i.e. 1=0, a contradiction. Thus (1, 1) &notin; L(S). Hence L(S) &ne; R<sup>2</sup>. In the adjoining figure (Fig. 1) red line represents the span of S.

![Example-I](images/exp3.2.PNG "Examples-I")<br>
<b>Fig. 1: L(S)=Red line</b><br>

(ii)	S={(1, 1), (1, 0)} spans R<sup>2</sup>, i.e. S is a spanning set of R<sup>2</sup>, i.e. L(S)=R<sup>2</sup>.
Justification: By definition, L(S)={x(1, 0)+y(1, 1)|x, y  &isin; R}={(x, 0)+(y, y)|x, y &isin; R}={(x+y, y)|x, y &isin; R}.
Clearly L(S) &sube; R<sup>2</sup>. We show that R<sup>2</sup> &sube; L(S). Let (a, b)  &isin; R<sup>2</sup>. Then (a, b)=α(1, 0)+β(1, 1) for some α, β &isin; R. Therefore α=a-b and β=b. Clearly α(1, 0)+β(1, 1)=(a, b). Thus (a, b) &isin; L(S). So that R<sup>2</sup> &sube; L(S). Hence L(S)=R<sup>2</sup>. In the adjoining figure (Fig. 2) portion shaded by red lines represents the span of S which equals to R<sup>2</sup> as (1, 0) is off the blue line spanned by (1, 1).

![Example-I](images/exp3.1.PNG "Examples-I")<br>
<b>Fig. 2: L(S)=Portion shaded by red lines=R<sup>2</sup></b><br>

(iii)	S={(1, 0), (2, 0)} does not span R<sup>2</sup> i.e. L(S) &ne; R<sup>2</sup>.
Justification: By definition, L(S)={x(1, 0)+y(2, 0)|x, y &isin; R}={(x, 0)+(2y, 0)|x, y &isin; R}={(x+2y, 0)|x, y &isin; R}.
We show that (0, 1)  &notin; L(S). For if (0, 1) &isin; L(S), then (0, 1)=α(1, 0)+β(2, 0) for some α, β &isin; R. Therefore 1=0, a contradiction. Thus (0, 1) &notin; L(S). Hence L(S) &ne; R<sup>2</sup>

### 7. Example-II: 
i. Consider the vector space P<sub>2</sub>x  over R and let S={1, x+1, x<sup>2</sup>+x+1} &sube; P<sub>2</sub>x . Then S spans P<sub>2</sub>x , i.e. L(S)=P<sub>2</sub>x .

Justification: By definition, L(S)={α.1+β(x+1)+γ(x<sup>2</sup>+x+1): α, β, γ  &isin; R}. Clearly L(S)  &sube;  P<sub>2</sub>x . To prove that P<sub>2</sub>x  &sube; L(S). Let a2x<sup>2</sup>+a<sub>1</sub>x<sup>1</sup>+a<sub>0</sub>  &isin; P<sub>2</sub>x , where a<sub>0</sub>, a<sub>1</sub>, a<sub>2</sub> &isin; R. Then a<sub>2</sub>x<sup>2</sup>+a<sub>1</sub>x<sup>1</sup>+a<sub>0</sub>= α.1+β(x+1)+γ(x<sup>2</sup>+x+1) for some α, β, γ  &isin; R. Therefore α=a<sub>0</sub>-a<sub>1</sub>, β=a<sub>1</sub>-a<sub>2</sub> and γ=a<sub>2</sub>.
Clearly, α.1+β(x+1)+γ(x<sup>2</sup>+x+1)= a<sub>2</sub>x<sup>2</sup>+a<sub>1</sub>x<sup>1</sup>+a<sub>0</sub>. Thus a<sub>2</sub>x<sup>2</sup>+a<sub>1</sub>x<sup>1</sup>+a<sub>0</sub> &isin; L(S), so that P<sub>2</sub>x  &sube; L(S). Hence L(S)= P<sub>2</sub>x .

ii. Consider the vector space P<sub>2</sub>x  over R and let
S={ x+1, x<sup>2</sup>+1, x-x<sup>2</sup>} &sube; P<sub>2</sub>x . Then S does not span P<sub>2</sub>x , i.e. L(S)  &ne; P<sub>2</sub>x .
Justification: By definition, L(S)={α(x+1)+β(x<sup>2</sup>+1)+γ(x-x<sup>2</sup>): α, β, γ  &isin; R}.We  show that 1 &notin;  L(S)because if not, then 1 &isin; L(S). Thus 1=α(x+1)+β(x<sup>2</sup>+1)+γ(x-x<sup>2</sup>) for some α, β, γ  &isin; R. Therefore α+β=1, α+γ=0, β-γ=0. By solving these equations, we get α+β=1and α+β=0, a contradiction. Thus 1 &notin;  L(S). Hence L(S)  &ne; P<sub>2</sub>x .

### 8. Properties:
(i) S is a subset of L(S).

(ii) L(S) is the smallest subspace of V containing S. Thus the smallest subspace of V containing φ is {0}.

(iii) Let A &sube; B &sube; V. Then L(A) &sube; L(B).
### 9. Summary:
For φ&ne;S&sube;V, α<sub>1</sub>x<sub>1</sub>+ α<sub>2</sub>x<sub>2</sub>+…+α<sub>k</sub>x<sub>k</sub> is a linear combination of elements of S, where x<sub>1</sub>, x<sub>2</sub>, …, x<sub>k</sub>&isin;S and α<sub>1</sub>, α<sub>2</sub>, ..., α<sub>k</sub>&isin;F: L(S) is the collection of all possible linear combinations of S. If S=φ, then L(S) is defined to be {0}. If L(S)=V, then S is called a spanning set of V and S is said to span V.

It may be noted that L(S)&ne;φ, S&sube;L(S) and L(S) is a subspace of V. Moreover, if W is a subspace of V such that S&sube;W, then L(S)&sube;W. In other words, L(S) is the smallest subspace of V containing S. A vector space V can have more than one spanning sets. For example, if we consider the vector space R<sup>2</sup> over R, then both of {(1, 0), (0, 1), (2, 2)} and {(1, 2), (2, 3)} are its spanning sets. Indeed, one can construct infinitely many of its spanning sets.

