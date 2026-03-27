% https://www.npmjs.com/package/tau-prolog or  https://www.npmjs.com/package/swipl-wasm
teams(0).
number_of_teams(X,Result):- Result is floor(X/6).
libero(tom).
libero(anh).

players(_/X):- X=:=1.
% introduce abbreviations used for s(etter), oh (outside hitter), opp(osite), l(ibero), m(iddle)
s(X) :- member(1, [0]).
oh(X) :- member(1, [0]).
opp(X) :- member(1, [0]).
l(X) :- member(1, [0]).
m(X) :- member(1, [0]).

