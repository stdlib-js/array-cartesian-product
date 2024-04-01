/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import cartesianProduct = require( './index' );


// TESTS //

// The function returns an array of arrays...
{
	cartesianProduct( [ 1, 2, 3, 4 ], [ 1, 3 ] ); // $ExpectType [number, number][]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	cartesianProduct( 1, [ 1, 3 ] ); // $ExpectError
	cartesianProduct( true, [ 1, 3 ] ); // $ExpectError
	cartesianProduct( false, [ 1, 3 ] ); // $ExpectError
	cartesianProduct( null, [ 1, 3 ] ); // $ExpectError
	cartesianProduct( void 0, [ 1, 3 ] ); // $ExpectError
	cartesianProduct( {}, [ 1, 3 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object...
{
	cartesianProduct( [], 1 ); // $ExpectError
	cartesianProduct( [], true ); // $ExpectError
	cartesianProduct( [], false ); // $ExpectError
	cartesianProduct( [], null ); // $ExpectError
	cartesianProduct( [], void 0 ); // $ExpectError
	cartesianProduct( [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	cartesianProduct(); // $ExpectError
	cartesianProduct( [] ); // $ExpectError
	cartesianProduct( [], [], [] ); // $ExpectError
}
